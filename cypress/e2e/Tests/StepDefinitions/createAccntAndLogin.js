import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import createAccntPage from "../../Pages/CreateAccntPage"

Given('user is on the Create Account page', () => {
  cy.visit('https://magento.softwaretestingboard.com/');
  cy.contains("Create an Account").click()

  
});

When('user fill in the mandatory details', function (datatable) {
  datatable.hashes().forEach(element => {
    cy.url().should('include', '/customer/account/create/');

    createAccntPage.fillFirstName(element.FirstName)
    createAccntPage.fillLastName(element.LastName)
    createAccntPage.fillEmailId(element.FirstName+element.LastName)
    createAccntPage.fillpassword(element.Password)
    createAccntPage.fillConfirmPassword(element.Password)
  })

});

When('submit the details', () => {

  createAccntPage.clickOnCreateAnAccnt()
});

Then('the user should be able to log in with the created credentials', () => {

  createAccntPage.verifyAccntCretion()


});

Given('user is on the Log in Account page', () => {
  cy.visit('https://magento.softwaretestingboard.com/');
  cy.contains("Sign In").click()
});

When('user fill in the user id and Password details', function (datatable) {
  datatable.hashes().forEach(element => {
    cy.url().should('include', '/account/login');

    createAccntPage.fillUserID(element.EmailId)
    createAccntPage.fillPasswordSignIn(element.Password)

  })

});

Then('the user should be able to log in with the entered credentials', () => {

  createAccntPage.clickOnSignIn()
  cy.contains('Welcome,')


});