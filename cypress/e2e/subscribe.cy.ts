describe("Newsletter Subscribe Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  //Testing to see that the vaidation submission works when validated correctly
  it("allows users to subscribe to the email list", () => {
    //This is reffering to the command that was typed in the support folder inside the command ts file
    cy.getByData("email-input").type("abe@aol.com")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("exist").contains("abe@aol.com")
  })
  //Testing to see that the vaidation submission works when validated incorrectly
  it("does NOT allow a onvalid email address", () => {
    cy.getByData("email-input").type("abe")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("not.exist")
  })
  //Practice test to check if the email already exist
  it("does NOT allow already subscribed email addresses", () => {
    cy.getByData("email-input").type("john@example.com")
    cy.getByData("submit-button").click()
    cy.getByData("server-error-message")
      .should("exist")
      .contains("already exists. Please use a different email address.")
  })
})
