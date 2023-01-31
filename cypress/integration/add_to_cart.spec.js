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

  it("Adds product to cart from homepage and cart increases by one", () => {
    cy.get(":nth-child(1) > div > .button_to > .btn")
    .click({force: true});

    cy.get("#navbarSupportedContent > :nth-child(2) > :nth-child(3) > .nav-link").should("contain", "My Cart (1)")
  });


})