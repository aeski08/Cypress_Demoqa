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


import 'cypress-file-upload';

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

Cypress.Commands.add("ClearAndSendKeys", (elementpath, value) => {  ///temizle ve gonder methodu
    const field = cy.get(elementpath).should("be.visible")
    field.clear()
    field.type(value)
})



// -------------------- ui ------------------------------

import utils from './utils';

Cypress.Commands.add('generateFixture', utils.generataFixture)



Cypress.Commands.add("dragTo", { prevSubject: "element" }, (subject, targetEl) => {
    const dataTransfer = new DataTransfer();
    cy.get(subject).trigger('dragstart', {
      dataTransfer
    });
    cy.get(targetEl).trigger('drop', {
      dataTransfer
    })
  }
  );
  
  
  Cypress.Commands.add('dragss', (from, to) => {
    const dataTransfer = new DataTransfer();
  
    cy.get(from).trigger('dragstart', {
      dataTransfer
    });
    cy.get(to).trigger('drop', {
      dataTransfer
    })
  })

//Iframe
Cypress.Commands.add("getIframe",(iFrame)=>{
    cy.get(iFrame)
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap)
    })

