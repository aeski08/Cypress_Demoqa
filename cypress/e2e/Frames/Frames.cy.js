import 'cypress-iframe'//3. yol: terminal e <npm install -D cypress-iframe > ile import etmek zorundayiz. 
describe('Handling frames',()=>{
 
   it('1. Yol',()=>{

    cy.visit("https://demoqa.com/frames")
    
    const iFrame = cy.get("#frame1")
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap)
      cy.wait(1000)
    iFrame.should('have.text','This is a sample page')


    const iFrame2 = cy.get("#frame2")
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap)
      cy.wait(1000)
    iFrame.should('have.text','This is a sample page')



 })
 //commands a getIframe() methodu ekleyerek olusturma
 it('2. Yol',()=>{
   cy.visit("https://demoqa.com/frames")
   
   const iFrame=cy.getIframe('#frame1')
   cy.wait(1000)
   iFrame.should('have.text','This is a sample page')
//ikinci frame
   const iFrame2=cy.getIframe('#frame2')
   cy.wait(1000)
   iFrame2.should('have.text','This is a sample page')
    
 
})
it('3. yol => cypress plug-in ile',()=>{
   cy.visit("https://demoqa.com/frames")

   cy.frameLoaded('#frame1') //frame yuklemek icin
   cy.iframe('#frame1').should('have.text','This is a sample page')

   cy.frameLoaded('#frame2') //2. frame yuklemek icin
   cy.iframe('#frame2').should('have.text','This is a sample page')

}) 

})