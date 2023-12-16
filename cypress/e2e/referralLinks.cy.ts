describe("Referral links smoke tests", () => {
  it("legacy referral links return status code 200", () => {
    cy.request("/invite/2cf46c61");
    cy.request("/en/invite/2cf46c61");
    cy.request("/de/invite/2cf46c61");
    cy.request("/fr/invite/2cf46c61");
  });

  it("new referral links return status code 200", () => {
    cy.request("/de/invite/lhd4dqqtde?code=123");
    cy.request("/fr/invite/lhd4dqqtde?code=123");
    cy.request("/en/invite/lhd4dqqtde?code=123");
    cy.request("/invite/lhd4dqqtde?code=123");
    cy.request("/de/invite/pelsulopb9?code=123");
    cy.request("/fr/invite/pelsulopb9?code=123");
    cy.request("/en/invite/pelsulopb9?code=123");
    cy.request("/invite/pelsulopb9?code=123");
  });
});

export {};
