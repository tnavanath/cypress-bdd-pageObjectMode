// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('typeInEditBox', (locator, text, clearExisting = true) => {
    
    cy.log('Typing text: ' + text + " into locator: "+ locator); 
    //we can have this if really needed 

    cy.get(locator, { timeout: 10000 }).should('be.visible').then((element) => {
     
      cy.wrap(element).scrollIntoView();
      if (clearExisting) {
        cy.wrap(element).clear();
      }
  
      cy.wrap(element).type(text);
    });
  });


  Cypress.Commands.add('clickButton', (locator, force = false) => {
   
    cy.log(`Clicking on button with locator: "${locator}", Force: ${force}`);
    //we can have this if really needed 
  
    cy.get(locator, { timeout: 10000 })
      .should('be.visible')  
      .click({ force: force });  

    //If user need force equal to tru while clicking button he can shared that argument while calling this customised method
  });

