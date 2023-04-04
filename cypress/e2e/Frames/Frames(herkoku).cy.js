import 'cypress-iframe'
describe('Handling frames',()=>{
 it('approach 1',()=>{
    cy.visit("https://the-internet.herokuapp.com/iframe")
    
    const iFrame = cy.get("#mce_0_ifr")
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap)

    iFrame.clear().type('Welcome {cmd+a}')
    cy.get("[aria-label='Bold']").click()

 })
 it('approach 2',()=>{
   cy.visit("https://the-internet.herokuapp.com/iframe")
   cy.getIframe('#mce_0_ifr').clear().type('Welcome {cmd+a}')
    
    cy.get("[aria-label='Bold']").click()
 
})

   it('approach 3-by using cypress plug-in',()=>{
      cy.visit("https://the-internet.herokuapp.com/iframe")
      cy.frameLoaded('#mce_0_ifr')
      cy.iframe('#mce_0_ifr').clear().type('Welcome {cmd+a}')
      cy.get("[aria-label='Bold']").click()
   
}) 

})