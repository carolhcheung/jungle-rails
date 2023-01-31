describe('Home Page', () => {
  beforeEach(() => {
   
    cy.visit('/')
  })

  it("There is products on the page", () => {
    cy.get(".products article").should("be.visible");
  });

  it("There is 2 products on the page", () => {
    cy.get(".products article").should("have.length", 2);
  });

  it("Navigates to product detail page from home page", () => {
    cy.get(":nth-child(1) > a > img")
    .click();
  });

})