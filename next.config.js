const { withSentryConfig } = require("@sentry/nextjs");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload"
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block"
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN"
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff"
  }
];

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  images: {
    domains: ["images.prismic.io", "truewealth.cdn.prismic.io"]
  },
  i18n: {
    locales: ["de", "en", "fr"],
    defaultLocale: "en"
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders
      },
      {
        source: "/invite/:code",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex"
          }
        ]
      }
    ];
  },
  async redirects() {
    return [
      {
        source: "/mail/de/blog/kinderportfolio-mit-etf-ein-vorsprung-furs-leben",
        destination:
          "/de/blog/kinderportfolio-mit-etf-ein-vorsprung-furs-leben?utm_source=newsletter&utm_medium=email&utm_campaign=blog_kinderportfolio",
        permanent: true
      },
      {
        source: "/mail/en/blog/child-portfolio-with-etf-a-head-start-for-life",
        destination:
          "/en/blog/child-portfolio-with-etf-a-head-start-for-life?utm_source=newsletter&utm_medium=email&utm_campaign=blog_kinderportfolio",
        permanent: true
      },
      {
        source:
          "/mail/fr/blog/portefeuille-pour-enfants-avec-etfetf--uneune-longueur-davance-pour-la-vie",
        destination:
          "/fr/blog/portefeuille-pour-enfants-avec-etfetf--uneune-longueur-davance-pour-la-vie?utm_source=newsletter&utm_medium=email&utm_campaign=blog_kinderportfolio",
        permanent: true
      },
      {
        source: "/mail/de/blog/5-gruende-warum-wir-portfolios-aus-etf-bauen",
        destination:
          "/de/blog/5-gruende-warum-wir-portfolios-aus-etf-bauen?utm_source=newsletter&utm_medium=email&utm_campaign=5_gruende_etf_blog",
        permanent: true
      },
      {
        source: "/mail/en/blog/5-reasons-why-we-use-etfs-to-build-portfolios",
        destination:
          "/en/blog/5-reasons-why-we-use-etfs-to-build-portfolios?utm_source=newsletter&utm_medium=email&utm_campaign=5_gruende_etf_blog",
        permanent: true
      },
      {
        source: "/mail/fr/blog/nos-5-raisons-de-construire-des-portefeuilles-avec-des-etf",
        destination:
          "/fr/blog/nos-5-raisons-de-construire-des-portefeuilles-avec-des-etf?utm_source=newsletter&utm_medium=email&utm_campaign=5_gruende_etf_blog",
        permanent: true
      },
      {
        source: "/mail/de/blog/was-bringt-vermoegensverwaltung",
        destination:
          "/de/blog/was-bringt-vermoegensverwaltung?utm_source=newsletter&utm_medium=email&utm_campaign=podcast_coffee_break_was_bring_vermoegensverwaltung",
        permanent: true
      },
      {
        source: "/mail/en/blog/what-is-the-benefit-of-wealth-management",
        destination:
          "/en/blog/what-is-the-benefit-of-wealth-management?utm_source=newsletter&utm_medium=email&utm_campaign=podcast_coffee_break_was_bring_vermoegensverwaltung",
        permanent: true
      },
      {
        source: "/mail/fr/blog/a-quoi-sert-la-gestion-de-fortune",
        destination:
          "/fr/blog/a-quoi-sert-la-gestion-de-fortune?utm_source=newsletter&utm_medium=email&utm_campaign=podcast_coffee_break_was_bring_vermoegensverwaltung",
        permanent: true
      },
      {
        source: "/mail/de/blog/talk-warum-habt-ihr-true-wealth-gegruendet",
        destination:
          "/de/blog/talk-warum-habt-ihr-true-wealth-gegruendet?utm_source=newsletter&utm_medium=email&utm_campaign=podcast_coffee_talk_true_wealth_gruendung",
        permanent: true
      },
      {
        source: "/mail/en/blog/talk-why-did-you-start-true-wealth",
        destination:
          "/en/blog/talk-why-did-you-start-true-wealth?utm_source=newsletter&utm_medium=email&utm_campaign=podcast_coffee_talk_true_wealth_gruendung",
        permanent: true
      },
      {
        source: "/mail/fr/blog/talk-pourquoi-avez-vous-fonde-true-wealth",
        destination:
          "/fr/blog/talk-pourquoi-avez-vous-fonde-true-wealth?utm_source=newsletter&utm_medium=email&utm_campaign=podcast_coffee_talk_true_wealth_gruendung",
        permanent: true
      },
      {
        source: "/mail/de/blog/was-ist-ein-etf",
        destination:
          "/de/blog/was-ist-ein-etf?utm_source=newsletter&utm_medium=email&utm_campaign=podcast_coffee_break_was_ist_ein_etf",
        permanent: true
      },
      {
        source: "/mail/en/blog/what-is-an-etf",
        destination:
          "/en/blog/what-is-an-etf?utm_source=newsletter&utm_medium=email&utm_campaign=podcast_coffee_break_was_ist_ein_etf",
        permanent: true
      },
      {
        source: "/mail/fr/blog/quest-ce-quun-etf",
        destination:
          "/fr/blog/quest-ce-quun-etf?utm_source=newsletter&utm_medium=email&utm_campaign=podcast_coffee_break_was_ist_ein_etf",
        permanent: true
      },
      {
        source: "/mail/de/kinderportfolio",
        destination:
          "/de/kinderportfolio?utm_source=newsletter&utm_medium=email&utm_campaign=kinderportfolio_announcement",
        permanent: true
      },
      {
        source: "/mail/en/child-portfolio",
        destination:
          "/en/child-portfolio?utm_source=newsletter&utm_medium=email&utm_campaign=kinderportfolio_announcement",
        permanent: true
      },
      {
        source: "/mail/fr/portefeuille-enfant",
        destination:
          "/fr/portefeuille-enfant?utm_source=newsletter&utm_medium=email&utm_campaign=kinderportfolio_announcement",
        permanent: true
      },
      {
        source: "/mail/de/blog/talk-finanzielle-bildung-der-schweizer-jugendlichen",
        destination:
          "/de/blog/talk-finanzielle-bildung-der-schweizer-jugendlichen?utm_source=newsletter&utm_medium=email&utm_campaign=podcast_finanzielle_bildung_schweiz",
        permanent: true
      },
      {
        source: "/mail/en/blog/financial-education-of-the-swiss-youth",
        destination:
          "/en/blog/financial-education-of-the-swiss-youth?utm_source=newsletter&utm_medium=email&utm_campaign=podcast_finanzielle_bildung_schweiz",
        permanent: true
      },
      {
        source: "/mail/fr/blog/leducation-financiere-des-jeunes-suisses",
        destination:
          "/fr/blog/leducation-financiere-des-jeunes-suisses?utm_source=newsletter&utm_medium=email&utm_campaign=podcast_finanzielle_bildung_schweiz",
        permanent: true
      },
      {
        source: "/mail/de/blog/kinderportfolios-anlegen-fuer-und-mit-kindern",
        destination:
          "/de/blog/kinderportfolios-anlegen-fuer-und-mit-kindern?utm_source=newsletter&utm_medium=email&utm_campaign=podcast_kinderportfolio_anlegen_mit_kinder",
        permanent: true
      },
      {
        source: "/mail/en/blog/child-portfolio-investing-for-and-with-children",
        destination:
          "/en/blog/child-portfolio-investing-for-and-with-children?utm_source=newsletter&utm_medium=email&utm_campaign=podcast_kinderportfolio_anlegen_mit_kinder",
        permanent: true
      },
      {
        source: "/mail/fr/blog/portefeuille-des-enfants-investir-pour-et-avec-les-enfants",
        destination:
          "/fr/blog/portefeuille-des-enfants-investir-pour-et-avec-les-enfants?utm_source=newsletter&utm_medium=email&utm_campaign=podcast_kinderportfolio_anlegen_mit_kinder",
        permanent: true
      },
      {
        source: "/mail/de/blog/wie-baut-man-ein-portfolio-mit-etf",
        destination:
          "/de/blog/wie-baut-man-ein-portfolio-mit-etf?utm_source=newsletter&utm_medium=email&utm_campaign=podcast_coffee_break_wie_baut_man_ein_portfolio_aus_etf",
        permanent: true
      },
      {
        source: "/mail/en/blog/how-to-build-a-portfolio-with-etf",
        destination:
          "/en/blog/how-to-build-a-portfolio-with-etf?utm_source=newsletter&utm_medium=email&utm_campaign=podcast_coffee_break_wie_baut_man_ein_portfolio_aus_etf",
        permanent: true
      },
      {
        source: "/mail/fr/blog/comment-construire-un-portefeuille-avec-des-etf",
        destination:
          "/fr/blog/comment-construire-un-portefeuille-avec-des-etf?utm_source=newsletter&utm_medium=email&utm_campaign=podcast_coffee_break_wie_baut_man_ein_portfolio_aus_etf",
        permanent: true
      },
      {
        source: "/mail/de/blog/warum-kommt-es-zu-bankenkrisen",
        destination:
          "/de/blog/warum-kommt-es-zu-bankenkrisen?utm_source=newsletter&utm_medium=email&utm_campaign=podcast_warum_kommt_es_zu_bankenkriesen",
        permanent: true
      },
      {
        source: "/mail/en/blog/why-do-banking-crises-keep-happening",
        destination:
          "/en/blog/why-do-banking-crises-keep-happening?utm_source=newsletter&utm_medium=email&utm_campaign=podcast_warum_kommt_es_zu_bankenkriesen",
        permanent: true
      },
      {
        source: "/mail/fr/blog/pourquoi-les-crises-bancaires-se-repetent-elles",
        destination:
          "/fr/blog/pourquoi-les-crises-bancaires-se-repetent-elles?utm_source=newsletter&utm_medium=email&utm_campaign=podcast_warum_kommt_es_zu_bankenkriesen",
        permanent: true
      },
      {
        source: "/mail/de/blog/ist-jetzt-ein-guter-zeitpunkt-zu-investieren",
        destination:
          "/de/blog/ist-jetzt-ein-guter-zeitpunkt-zu-investieren?utm_source=newsletter&utm_medium=email&utm_campaign=podcast_ist_jetzt_ein_guter_zeitpunkt_zu_investieren",
        permanent: true
      },
      {
        source: "/mail/en/blog/is-now-a-good-time-to-invest",
        destination:
          "/en/blog/is-now-a-good-time-to-invest?utm_source=newsletter&utm_medium=email&utm_campaign=podcast_ist_jetzt_ein_guter_zeitpunkt_zu_investieren",
        permanent: true
      },
      {
        source: "/mail/fr/blog/est-ce-le-bon-moment-pour-investir",
        destination:
          "/fr/blog/est-ce-le-bon-moment-pour-investir?utm_source=newsletter&utm_medium=email&utm_campaign=podcast_ist_jetzt_ein_guter_zeitpunkt_zu_investieren",
        permanent: true
      },
      {
        source: "/mail/de/blog/was-macht-eigentlich-die-schweizerische-nationalbank",
        destination:
          "/de/blog/was-macht-eigentlich-die-schweizerische-nationalbank?utm_source=newsletter&utm_medium=email&utm_campaign=podcast_was_macht_die_schweizerische_nationalbank",
        permanent: true
      },
      {
        source: "/mail/en/blog/what-does-the-swiss-national-bank-do",
        destination:
          "/en/blog/what-does-the-swiss-national-bank-do?utm_source=newsletter&utm_medium=email&utm_campaign=podcast_was_macht_die_schweizerische_nationalbank",
        permanent: true
      },
      {
        source: "/mail/fr/blog/que-fait-la-banque-nationale-suisse",
        destination:
          "/fr/blog/que-fait-la-banque-nationale-suisse?utm_source=newsletter&utm_medium=email&utm_campaign=podcast_was_macht_die_schweizerische_nationalbank",
        permanent: true
      },
      {
        source: "/mail/de/blog/wie-viel-verlust-koennen-sie-sich-leisten",
        destination:
          "/de/blog/wie-viel-verlust-koennen-sie-sich-leisten?utm_source=newsletter&utm_medium=email&utm_campaign=podcast_wie_viel_verlust_kannst_du_dir_leisten",
        permanent: true
      },
      {
        source: "/mail/en/blog/how-much-loss-can-you-afford",
        destination:
          "/en/blog/how-much-loss-can-you-afford?utm_source=newsletter&utm_medium=email&utm_campaign=podcast_wie_viel_verlust_kannst_du_dir_leisten",
        permanent: true
      },
      {
        source: "/mail/fr/blog/combien-de-pertes-pouvez-vous-vous-permettre",
        destination:
          "/fr/blog/combien-de-pertes-pouvez-vous-vous-permettre?utm_source=newsletter&utm_medium=email&utm_campaign=podcast_wie_viel_verlust_kannst_du_dir_leisten",
        permanent: true
      },
      {
        source: "/mail/de/blog/die-kosten-des-market-timing",
        destination:
          "/de/blog/die-kosten-des-market-timing?utm_source=newsletter&utm_medium=email&utm_campaign=market_timing_kosten",
        permanent: true
      },
      {
        source: "/mail/en/blog/the-cost-of-market-timing",
        destination:
          "/en/blog/the-cost-of-market-timing?utm_source=newsletter&utm_medium=email&utm_campaign=market_timing_kosten",
        permanent: true
      },
      {
        source: "/mail/fr/blog/le-cout-du-market-timing",
        destination:
          "/fr/blog/le-cout-du-market-timing?utm_source=newsletter&utm_medium=email&utm_campaign=market_timing_kosten",
        permanent: true
      },
      {
        source: "/mail/de/blog/funktioniert-nachhaltiges-investieren",
        destination:
          "/de/blog/funktioniert-nachhaltiges-investieren?utm_source=newsletter&utm_medium=email&utm_campaign=podcast_funktioniert_nachhaltiges_investieren",
        permanent: true
      },
      {
        source: "/mail/en/blog/does-sustainable-investing-work",
        destination:
          "/en/blog/does-sustainable-investing-work?utm_source=newsletter&utm_medium=email&utm_campaign=podcast_funktioniert_nachhaltiges_investieren",
        permanent: true
      },
      {
        source: "/mail/fr/blog/linvestissement-durable-fonctionne-t-il",
        destination:
          "/fr/blog/linvestissement-durable-fonctionne-t-il?utm_source=newsletter&utm_medium=email&utm_campaign=podcast_funktioniert_nachhaltiges_investieren",
        permanent: true
      },
      {
        source: "/mail/de/blog/greenwashing-die-grenzen-von-esg-und-impact-investing",
        destination:
          "/de/blog/greenwashing-die-grenzen-von-esg-und-impact-investing?utm_source=newsletter&utm_medium=email&utm_campaign=blog_greenwashing",
        permanent: true
      },
      {
        source: "/mail/en/blog/greenwashing-the-limits-of-esg-and-impact-investing",
        destination:
          "/en/blog/greenwashing-the-limits-of-esg-and-impact-investing?utm_source=newsletter&utm_medium=email&utm_campaign=blog_greenwashing",
        permanent: true
      },
      {
        source: "/mail/fr/blog/greenwashing-les-limites-de-esg-et-investissement-d-impact",
        destination:
          "/fr/blog/greenwashing-les-limites-de-esg-et-investissement-d-impact?utm_source=newsletter&utm_medium=email&utm_campaign=blog_greenwashing",
        permanent: true
      },
      {
        source: "/mail/de/blog/keine-zeit-fuer-saeule-3a",
        destination:
          "/de/blog/keine-zeit-fuer-saeule-3a?utm_source=newsletter&utm_medium=email&utm_campaign=podcast_keine_zeit_fuer_3a",
        permanent: true
      },
      {
        source: "/mail/en/blog/no-time-for-pillar-3a",
        destination:
          "/en/blog/no-time-for-pillar-3a?utm_source=newsletter&utm_medium=email&utm_campaign=podcast_keine_zeit_fuer_3a",
        permanent: true
      },
      {
        source: "/mail/fr/blog/pas-le-temps-pour-le-pilier-3a",
        destination:
          "/fr/blog/pas-le-temps-pour-le-pilier-3a?utm_source=newsletter&utm_medium=email&utm_campaign=podcast_keine_zeit_fuer_3a",
        permanent: true
      },
      {
        source: "/mail/de/blog/unser-anlageansatz",
        destination:
          "/de/blog/unser-anlageansatz?utm_source=newsletter&utm_medium=email&utm_campaign=podcast_anlageansatz",
        permanent: true
      },
      {
        source: "/mail/en/blog/our-investment-approach",
        destination:
          "/en/blog/our-investment-approach?utm_source=newsletter&utm_medium=email&utm_campaign=podcast_anlageansatz",
        permanent: true
      },
      {
        source: "/mail/fr/blog/notre-approche-de-linvestissement",
        destination:
          "/fr/blog/notre-approche-de-linvestissement?utm_source=newsletter&utm_medium=email&utm_campaign=podcast_anlageansatz",
        permanent: true
      },
      {
        source: "/mail/de/blog/was-ist-geld",
        destination:
          "/de/blog/was-ist-geld?utm_source=newsletter&utm_medium=email&utm_campaign=podcast_was_ist_geld",
        permanent: true
      },
      {
        source: "/mail/en/blog/what-is-money",
        destination:
          "/en/blog/what-is-money?utm_source=newsletter&utm_medium=email&utm_campaign=podcast_was_ist_geld",
        permanent: true
      },
      {
        source: "/mail/fr/blog/quest-ce-que-largent",
        destination:
          "/fr/blog/quest-ce-que-largent?utm_source=newsletter&utm_medium=email&utm_campaign=podcast_was_ist_geld",
        permanent: true
      },
      {
        source: "/mail/de/blog/saule-3a-so-sparen-sie-gleich-doppelt-steuern",
        destination:
          "/de/blog/saule-3a-so-sparen-sie-gleich-doppelt-steuern?utm_source=newsletter&utm_medium=email&utm_campaign=3a_fuenf_konten",
        permanent: true
      },
      {
        source: "/mail/en/blog/pillar-3a-how-to-save-twice-as-much-tax",
        destination:
          "/en/blog/pillar-3a-how-to-save-twice-as-much-tax?utm_source=newsletter&utm_medium=email&utm_campaign=3a_fuenf_konten",
        permanent: true
      },
      {
        source: "/mail/fr/blog/pilier-3a-pour-economiser-deux-fois-plus-dimpots",
        destination:
          "/fr/blog/pilier-3a-pour-economiser-deux-fois-plus-dimpots?utm_source=newsletter&utm_medium=email&utm_campaign=3a_fuenf_konten",
        permanent: true
      },
      {
        source: "/mail/de/saeule-3a",
        destination: "/de/saeule-3a?utm_source=newsletter&utm_medium=email&utm_campaign=pillar_3a",
        permanent: true
      },
      {
        source: "/mail/en/pillar-3a",
        destination: "/en/pillar-3a?utm_source=newsletter&utm_medium=email&utm_campaign=pillar_3a",
        permanent: true
      },
      {
        source: "/mail/fr/pilier-3a",
        destination: "/fr/pilier-3a?utm_source=newsletter&utm_medium=email&utm_campaign=pillar_3a",
        permanent: true
      },
      {
        source: "/gebuehren",
        destination: "/de/pricing",
        permanent: true
      },
      {
        source: "/de/wissen/gebuehren",
        destination: "/de/pricing",
        permanent: true,
        locale: false
      },
      {
        source: "/fr/connaissances/frais-de-gestion",
        destination: "/fr/pricing",
        permanent: true,
        locale: false
      },
      {
        source: "/knowledge/fees",
        destination: "/en/pricing",
        permanent: true
      },
      {
        source: "/nachhaltig",
        destination: "/de/nachhaltig-investieren",
        permanent: true
      },
      {
        source: "/nachhaltigkeit",
        destination: "/de/nachhaltig-investieren",
        permanent: true
      },
      {
        source: "/sustainability",
        destination: "/en/sustainable-investment",
        permanent: true
      },
      {
        source: "/de/support",
        destination: "/de/kontakt",
        permanent: true,
        locale: false
      },
      {
        source: "/en/support",
        destination: "/en/contact",
        permanent: true,
        locale: false
      },
      {
        source: "/point-of-view",
        destination: "/de/blog",
        permanent: true
      },
      {
        source: "/point-of-view/:slug",
        destination: "/de/blog/:slug",
        permanent: true
      },
      {
        source: "/point-of-view/page/:slug",
        destination: "/de/blog?page=:slug",
        permanent: true
      },
      {
        source: "/point-of-view/(category|tag|author)/:slug*",
        destination: "/de/blog",
        permanent: true
      },
      {
        source: "/de/medienmitteilungen/:slug",
        destination: "/de/presse/:slug",
        permanent: true,
        locale: false
      },
      {
        source: "/en/media-releases/:slug",
        destination: "/en/press/:slug",
        permanent: true,
        locale: false
      },
      {
        source: "/de/login/:params*",
        destination: `${process.env.NEXT_PUBLIC_APP_URL}/app/login?lang=de:params*`,
        permanent: true,
        locale: false
      },
      {
        source: "/en/login/:params*",
        destination: `${process.env.NEXT_PUBLIC_APP_URL}/app/login?lang=en:params*`,
        permanent: true,
        locale: false
      },
      {
        source: "/de/konto-eroeffnen",
        destination: `${process.env.NEXT_PUBLIC_APP_URL}/app/signup/real?lang=de`,
        permanent: true,
        locale: false
      },
      {
        source: "/en/signup",
        destination: `${process.env.NEXT_PUBLIC_APP_URL}/app/signup/real?lang=en`,
        permanent: true,
        locale: false
      },
      {
        source: "/de/virtuelles-testkonto-eroeffnen",
        destination: `${process.env.NEXT_PUBLIC_APP_URL}/app/signup/virtual?lang=de`,
        permanent: true,
        locale: false
      },
      {
        source: "/en/virtual-account-signup",
        destination: `${process.env.NEXT_PUBLIC_APP_URL}/app/signup/virtual?lang=en`,
        permanent: true,
        locale: false
      },
      {
        source: "/r/risiken-im-handel-mit-finanzinstrumenten",
        destination: "/assets/pdf/SBVg_Risiken_im_Handel_mit_Finanzinstrumenten_2023_DE.pdf",
        permanent: true
      },
      {
        source: "/r/risks-involved-in-trading-financial-instruments",
        destination: "/assets/pdf/SBA_Risks_Involved_in_Trading_Financial_Instruments_2023_EN.pdf",
        permanent: true
      },
      {
        source: "/r/risques-inherents-au-commerce-instruments-financiers",
        destination:
          "/assets/pdf/ASB_Risques_inherents_au_commerce_instruments_financiers_2023_FR.pdf",
        permanent: true
      },
      {
        source: "/r/risiken-im-effektenhandel",
        destination: "/assets/pdf/SB_2008_D_BesondereRisikenImEffektenhandel.pdf",
        permanent: true
      },
      {
        source: "/r/risks-in-securities-trading",
        destination: "/assets/pdf/SB_2008_E_SpecialRisksinSecuritiesTrading.pdf",
        permanent: true
      },
      {
        source: "/r/3a-organisationsreglement",
        destination: "/assets/pdf/3a/2023-11/de/Organisationsreglement.pdf",
        permanent: true
      },
      {
        source: "/r/3a-vorsorgereglement",
        destination: "/assets/pdf/3a/2023-11/de/Vorsorgereglement.pdf",
        permanent: true
      },
      {
        source: "/r/3a-anlagereglement",
        destination: "/assets/pdf/3a/2023-11/de/Anlagereglement.pdf",
        permanent: true
      },
      {
        source: "/r/3a-anlagereglement-anhang",
        destination: "/assets/pdf/3a/2023-11/de/Anhang-zum-Anlagereglement.pdf",
        permanent: true
      },
      {
        source: "/r/3a-kostenreglement",
        destination: "/assets/pdf/3a/2023-11/de/Kostenreglement.pdf",
        permanent: true
      },
      {
        source: "/r/3a-organisational-regulations",
        destination: "/assets/pdf/3a/2023-11/en/Organisational-Regulations.pdf",
        permanent: true
      },
      {
        source: "/r/3a-pension-regulations",
        destination: "/assets/pdf/3a/2023-11/en/Pension-Regulations.pdf",
        permanent: true
      },
      {
        source: "/r/3a-investment-regulations",
        destination: "/assets/pdf/3a/2023-11/en/Investment-Regulations.pdf",
        permanent: true
      },
      {
        source: "/r/3a-investment-regulations-annex",
        destination: "/assets/pdf/3a/2023-11/en/Annex-to-the-Investment-Regulations.pdf",
        permanent: true
      },
      {
        source: "/r/3a-cost-regulations",
        destination: "/assets/pdf/3a/2023-11/en/Cost-Regulations.pdf",
        permanent: true
      },
      {
        source: "/r/3a-reglement-organisation",
        destination: "/assets/pdf/3a/2023-11/fr/Reglement-Organisation.pdf",
        permanent: true
      },
      {
        source: "/r/3a-reglement-prevoyance",
        destination: "/assets/pdf/3a/2023-11/fr/Reglement-Prevoyance.pdf",
        permanent: true
      },
      {
        source: "/r/3a-reglement-placement",
        destination: "/assets/pdf/3a/2023-11/fr/Reglement-Placement.pdf",
        permanent: true
      },
      {
        source: "/r/3a-reglement-placement-annexe",
        destination: "/assets/pdf/3a/2023-11/fr/Reglement-Placement-Annexe.pdf",
        permanent: true
      },
      {
        source: "/r/3a-reglement-couts",
        destination: "/assets/pdf/3a/2023-11/fr/Reglement-Couts.pdf",
        permanent: true
      },
      {
        source: "/r/2023-11/3a-organisationsreglement",
        destination: "/assets/pdf/3a/2023-11/de/Organisationsreglement.pdf",
        permanent: true
      },
      {
        source: "/r/2023-11/3a-vorsorgereglement",
        destination: "/assets/pdf/3a/2023-11/de/Vorsorgereglement.pdf",
        permanent: true
      },
      {
        source: "/r/2023-11/3a-vorsorgevereinbarung",
        destination: "/assets/pdf/3a/2023-11/de/Vorsorgevereinbarung.pdf",
        permanent: true
      },
      {
        source: "/r/2023-11/3a-anlagereglement",
        destination: "/assets/pdf/3a/2023-11/de/Anlagereglement.pdf",
        permanent: true
      },
      {
        source: "/r/2023-11/3a-anlagereglement-anhang",
        destination: "/assets/pdf/3a/2023-11/de/Anhang-zum-Anlagereglement.pdf",
        permanent: true
      },
      {
        source: "/r/2023-11/3a-kostenreglement",
        destination: "/assets/pdf/3a/2023-11/de/Kostenreglement.pdf",
        permanent: true
      },
      {
        source: "/r/2023-11/3a-organisational-regulations",
        destination: "/assets/pdf/3a/2023-11/en/Organisational-Regulations.pdf",
        permanent: true
      },
      {
        source: "/r/2023-11/3a-pension-regulations",
        destination: "/assets/pdf/3a/2023-11/en/Pension-Regulations.pdf",
        permanent: true
      },
      {
        source: "/r/2023-11/3a-pension-agreement",
        destination: "/assets/pdf/3a/2023-11/en/Pension-Agreement.pdf",
        permanent: true
      },
      {
        source: "/r/2023-11/3a-investment-regulations",
        destination: "/assets/pdf/3a/2023-11/en/Investment-Regulations.pdf",
        permanent: true
      },
      {
        source: "/r/2023-11/3a-investment-regulations-annex",
        destination: "/assets/pdf/3a/2023-11/en/Annex-to-the-Investment-Regulations.pdf",
        permanent: true
      },
      {
        source: "/r/2023-11/3a-cost-regulations",
        destination: "/assets/pdf/3a/2023-11/en/Cost-Regulations.pdf",
        permanent: true
      },
      {
        source: "/r/2023-11/3a-reglement-organisation",
        destination: "/assets/pdf/3a/2023-11/fr/Reglement-Organisation.pdf",
        permanent: true
      },
      {
        source: "/r/2023-11/3a-reglement-prevoyance",
        destination: "/assets/pdf/3a/2023-11/fr/Reglement-Prevoyance.pdf",
        permanent: true
      },
      {
        source: "/r/2023-11/3a-accord-prevoyance",
        destination: "/assets/pdf/3a/2023-11/fr/Accord-Prevoyance.pdf",
        permanent: true
      },
      {
        source: "/r/2023-11/3a-reglement-placement",
        destination: "/assets/pdf/3a/2023-11/fr/Reglement-Placement.pdf",
        permanent: true
      },
      {
        source: "/r/2023-11/3a-reglement-placement-annexe",
        destination: "/assets/pdf/3a/2023-11/fr/Reglement-Placement-Annexe.pdf",
        permanent: true
      },
      {
        source: "/r/2023-11/3a-reglement-couts",
        destination: "/assets/pdf/3a/2023-11/fr/Reglement-Couts.pdf",
        permanent: true
      },
      {
        source: "/en/privacy-statement",
        destination: "/en/data-protection-declaration",
        permanent: true,
        locale: false
      },
      {
        source: "/en/knowledge/ETF",
        destination: "/en/knowledge/etfs",
        permanent: true,
        locale: false
      },
      {
        source: "/de/wissen/ETF",
        destination: "/de/wissen/etfs",
        permanent: true,
        locale: false
      },
      {
        source: "/r/saxo-agb",
        destination: "https://app.saxobank.ch/docs/010-DE-GTC.pdf",
        permanent: true
      },
      {
        source: "/r/saxo-gtc",
        destination: "https://app.saxobank.ch/docs/010-EN-GTC.pdf",
        permanent: true
      },
      {
        source: "/r/saxo-cgv",
        destination: "https://app.saxobank.ch/docs/010-FR-GTC.pdf",
        permanent: true
      },
      {
        source: "/r/saxo-risiken-im-handel",
        destination: "https://app.saxobank.ch/docs/014-DE-Risk-FX-CFD.PDF.pdf",
        permanent: true
      },
      {
        source: "/r/saxo-risk-disclosure",
        destination: "https://app.saxobank.ch/docs/014-EN-Risk-FX-CFD.PDF.pdf",
        permanent: true
      },
      {
        source: "/r/saxo-avertissement-risques",
        destination: "https://app.saxobank.ch/docs/014-FR-Risk-FX-CFD.PDF.pdf",
        permanent: true
      },
      {
        source: "/r/blkb-gb",
        destination: "https://www.blkb.ch/geschaeftsbedingungen",
        permanent: true
      },
      {
        source: "/r/blkb-gtc",
        destination: "https://www.blkb.ch/geschaeftsbedingungen",
        permanent: true
      },
      {
        source: "/r/blkb-cgv",
        destination: "https://www.blkb.ch/geschaeftsbedingungen",
        permanent: true
      }
    ];
  }
};

module.exports = withBundleAnalyzer(
  withSentryConfig(
    nextConfig,
    { silent: true, dryRun: !process.env.SENTRY_DSN && !process.env.NEXT_PUBLIC_SENTRY_DSN },
    { hideSourceMaps: true }
  )
);
