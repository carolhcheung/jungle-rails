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

  it("Navigates to login page from home page", () => {
    cy.get("#navbarSupportedContent > :nth-child(2) > :nth-child(2) > .nav-link")
      .click();
  });

  it("User enter email and password for login and click submit", () => {
    cy.get("#navbarSupportedContent > :nth-child(2) > :nth-child(2) > .nav-link")
      .click();
    cy.get("#email").type("test@test.com")
    cy.get("#password").type("testtesttest")

    cy.get('form.action-form').submit()

    cy.get("#navbarSupportedContent > :nth-child(2) > :nth-child(2) > .nav-link").contains("Logout")
  });


  it("User login and cookie session created", () => {
    cy.get("#navbarSupportedContent > :nth-child(2) > :nth-child(2) > .nav-link")
      .click();
    cy.get("#email").type("test@test.com")
    cy.get("#password").type("testtesttest")

    cy.get('form.action-form').submit()

    cy.get("#navbarSupportedContent > :nth-child(2) > :nth-child(2) > .nav-link").contains("Logout")

    cy.getCookie("_new_session").should('exist')
  });
});