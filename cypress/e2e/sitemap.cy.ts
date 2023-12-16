const getRelativeUrl = (url: string) => new URL(url).pathname;
const parseDocument = (content: string, type: DOMParserSupportedType) =>
  new DOMParser().parseFromString(content, type);

describe("Sitemap", () => {
  let urls: string[] = [];

  before(() => {
    cy.request("/sitemap.xml").then((resRoot) => {
      const sitemapUrls = Array.from(
        parseDocument(resRoot.body, "text/xml").getElementsByTagName("loc")
      )
        .map((loc) => loc.childNodes[0].nodeValue)
        .filter((l): l is string => l !== null);

      sitemapUrls.forEach((url) => {
        cy.request(getRelativeUrl(url)).then((res) => {
          urls = Array.from(parseDocument(res.body, "text/xml").getElementsByTagName("loc"))
            .map((loc) => loc.childNodes[0].nodeValue)
            .filter((l): l is string => l !== null);
        });
      });
    });
  });

  it("urls in sitemaps return status code 200 and have canonical url", () => {
    urls.forEach((url) => {
      const relativeUrl = getRelativeUrl(url);
      cy.request(relativeUrl).then((res) => {
        const canonicalUrl = parseDocument(res.body, "text/html")
          .querySelector('[rel="canonical"]')
          ?.getAttribute("href");

        if (!canonicalUrl) {
          throw new Error(`No canonical url present for ${url}`);
        }

        expect(getRelativeUrl(canonicalUrl)).to.eq(relativeUrl);
        expect(res.status).to.eq(200);
      });
    });
  });
});

export {};
