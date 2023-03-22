describe('Accordian',()=>{

    it('Accordian Test', () => {
        cy.visit(Cypress.env('demoqaURL'))
        cy.get(':nth-child(1) > :nth-child(1) > .card-up').click()
        cy.get(':nth-child(4) > .group-header > .header-wrapper > .header-text').click()
        cy.get(':nth-child(4) > .element-list > .menu-list > #item-0 > .text').click()
        cy.get('[class="card-header"]').first().should('contain.text','What is Lorem Ipsum?') 
        cy.get('[class="card-header"]').last().should('have.text','Why do we use it?')           
      
        //First title
        cy.get('#section1Heading').should('contain.text','What is Lorem') 
        cy.get('#section1Heading').click()   //Default olarak acik olan body'yi header'a click yaparak kapattik
        cy.get('#section1Content > p').should('not.be.visible') 
        cy.get('#section1Heading').click() //Body'yi actik   
        cy.get('#section1Content > p').should('contain.text','Lorem Ipsum is simply dummy')   
            

        //Second title
        cy.get('#section2Heading').should('contain.text','Where does')
        cy.get('#section2Content > :nth-child(1)').should('not.be.visible')
        cy.get('#section2Heading').click()
        cy.get('#section2Content > :nth-child(1)').should('contain.text','Contrary to popular belief')

        //Third title
        cy.get('#section3Heading').should('have.text','Why do we use it?')
        cy.get('#section3Content > p').should('not.be.visible')
        cy.get('#section3Heading').click()
        cy.get('#section3Content > p').should('include.text','It is a long established')        
    });

})