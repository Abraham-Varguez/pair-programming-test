const url = "http://localhost:3000"

describe("home page", () => {
  beforeEach(() => {
    cy.visit(url)
  })

  //The context function helps breakdown which section you are testing on, for example here we are doing test for the hero section
  context("hero-section", () => {
    //This is a test checking the h1 tag to make sure it contains the correct text inside the h1
    //using command chaining it is selcting the h1 tag by calling the "[data-test='hero-heading']" and then checking what it contiains by using that contains method
    it("the h1 contains the correct text", () => {
      cy.get("[data-test='hero-heading']").contains(
        "Testing Next.js Applications with Cypress"
      )
    })

    //This will only run this test because be have added the .only method!
    it.only("the features on the homepage are correct", () => {
      cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")
    })
  })

  //We are testing at the course section to see if we can navigate to th last anchor tag/ to select the last anchor tag we use eq and select the number based on the array  order
  context("Courses Section", () => {
    it("Course: Testing Your First Next.js Application", () => {
      cy.getByData("course-0").find("a").eq(3).click()
      cy.location("pathname").should("eq", "/testing-your-first-application")
    })
  })
  //We are testing the Get Started anchor tag at the Testing Foundation Section by firsy checking if it exist and contains Get Started, then checking that the url returns testing-foundations
  it("Course: Testing Foundations", () => {
    cy.getByData("course-1").find("a").contains("Get started").click()
    cy.location("pathname").should("equal", "/testing-foundations")
  })
  //We are testing the Get Started anchor tag at the Cypress Fundamentals section by firsy checking if it exist and contains Get Started, then checking that the url returns testing-foundations
  it.only("Course: Cypress Fundamentals", () => {
    cy.getByData("course-2").find("a").contains("Get started").click()
    cy.location("pathname").should("equal", "/cypress-fundamentals")
  })
})
