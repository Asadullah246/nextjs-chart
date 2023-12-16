const fs = require("fs");
const path = require("path");
const prismicHelpers = require("@prismicio/client");

/**
 * @type {import('next').NextConfig}
 */
const config = require("./next.config");
const locales = config.i18n?.locales ?? [];
const defaultLocale = config.i18n?.defaultLocale;

/**
 * https://sitebulb.com/hints/xml-sitemaps/redirect-3xx-url-in-xml-sitemaps/
 * We only want to include canonical urls in the sitemap
 */
const getCanonicalPath = (/** @type {string} */ path) => {
  const nonDefaultLocales = locales.filter((locale) => locale !== defaultLocale);
  const isLocaleAlreadyIncluded = nonDefaultLocales.some(
    (locale) => path.includes(`/${locale}/`) || path === `/${locale}`
  );
  return isLocaleAlreadyIncluded ? path : `/${defaultLocale}${path}`;
};

const getLastPageModificationDate = (
  /** @type {string} */ sourceDir,
  /** @type {string} */ canonicalPath
) => {
  if (
    locales.some((locale) =>
      [`/${locale}/`, `/${locale}`, `/${locale}/blog`].includes(canonicalPath)
    )
  ) {
    /**
     * The homepage and the blog overview contain dynamic elements (e.g. blog posts).
     * The date of the last publication of the page itself (see code below) does not take these dynamic elements into account.
     * Therefore, we simply use the time during deployment.
     */
    return new Date().toISOString();
  }

  try {
    const pathSegments = canonicalPath.split("/").filter(Boolean);
    pathSegments[pathSegments.length - 1] = `${pathSegments[pathSegments.length - 1]}.json`;
    const nextPageData = JSON.parse(
      fs.readFileSync(
        path.join(process.cwd(), sourceDir, "server", "pages", ...pathSegments),
        "utf8"
      )
    );
    return prismicHelpers.asDate(nextPageData.pageProps.doc.last_publication_date).toISOString();
  } catch (err) {
    console.error(err);
    return new Date().toISOString();
  }
};

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL || "https://www.truewealth.ch",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/"
      },
      {
        userAgent: "*",
        disallow: [
          "/assets/pdf/SB_2008_D_BesondereRisikenImEffektenhandel.pdf",
          "/assets/pdf/SB_2008_E_SpecialRisksinSecuritiesTrading.pdf",
          "/assets/pdf/SBVg_Risiken_DE_1seitig.pdf",
          "/assets/pdf/SBVg_Risiken_EN-1seitig.pdf"
        ]
      }
    ]
  },
  exclude: [
    "*/404",
    "*/no-translation",
    "*/styleguide",
    "*/invite/*", // referral links
    "*/lhd4dqqtde", // (old) referral link
    "*/pelsulopb9" // (old) referral link
  ],
  changefreq: "weekly",
  transform: async (config, urlPath) => {
    const canonicalPath = getCanonicalPath(urlPath);

    return {
      loc: canonicalPath,
      /**
       * We decided that it is not worth implementing logic that tries to figure out smart values for
       * changefreq and priority, since it is not clear whether these attributes add any value at all in terms of SEO.
       */
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: getLastPageModificationDate(config.sourceDir, canonicalPath),
      alternateRefs: config.alternateRefs ?? []
    };
  }
};
