/// <reference types="cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
  })
describe('aspire test cases', () => {
  it('randomly enter the website arabic or english', () => {
   let website = ["https://global.almosafer.com/ar","https://global.almosafer.com/en"]

   
   let randomindex = Math.floor(Math.random()*website.length)
cy.visit(website[randomindex])  


let arabiccities = ["جده","دبي"]
let arabicrandomindex = Math.floor(Math.random()*arabiccities.length)
let englishcities = ["riyadh","dubai","jeddah"]
let englishrandomindex =Math.floor(Math.random()*englishcities.length)

cy.get('.cta__saudi').click()


   )  })
})