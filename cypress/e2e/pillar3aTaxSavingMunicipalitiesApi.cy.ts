import { Municipality } from "lib/pillar3a/taxSavingDomain";

describe("Pillar 3a tax saving municipalities api", () => {
  it("should expose municipalities", async () => {
    cy.request("/api/pillar3a-tax-municipalities").as("municipalitiesCall");

    cy.get("@municipalitiesCall").should((response: any) => {
      const municipalities: Municipality[] = response.body;
      expect(municipalities).to.have.length(2149);
    });
  });

  it("should expose municipalities with distinct bfsIds", async () => {
    cy.request("/api/pillar3a-tax-municipalities").as("municipalitiesCall");

    cy.get("@municipalitiesCall").should((response: any) => {
      const municipalities: Municipality[] = response.body;
      const uniqueBfsIds = new Set(municipalities.map((m) => m.bfsId));
      expect(uniqueBfsIds).to.have.length(municipalities.length);
    });
  });

  it("should expose municipalities with distinct names", async () => {
    cy.request("/api/pillar3a-tax-municipalities").as("municipalitiesCall");

    cy.get("@municipalitiesCall").should((response: any) => {
      const municipalities: Municipality[] = response.body;
      const uniqueCities = new Set(municipalities.map((m) => m.city));
      expect(uniqueCities).to.have.length(municipalities.length);
    });
  });

  it("should expose municipalities from all cantons", async () => {
    cy.request("/api/pillar3a-tax-municipalities").as("municipalitiesCall");

    cy.get("@municipalitiesCall").should((response: any) => {
      const municipalities: Municipality[] = response.body;
      const cantons = Array.from(new Set(municipalities.map((m) => m.canton)));
      expect([...cantons]).to.have.members([
        "AG",
        "AI",
        "AR",
        "BE",
        "BL",
        "BS",
        "FR",
        "GE",
        "GL",
        "GR",
        "JU",
        "LU",
        "NE",
        "NW",
        "OW",
        "SG",
        "SH",
        "SO",
        "SZ",
        "TG",
        "TI",
        "UR",
        "VD",
        "VS",
        "ZG",
        "ZH"
      ]);
    });
  });
});

export {};
