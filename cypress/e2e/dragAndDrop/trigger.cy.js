describe('trigger', () => {

    it('1', () => {
        cy.visit('https://demoqa.com/')
        cy.get(':nth-child(5) > :nth-child(1) > .card-up').click({ force: true })
        cy.get(':nth-child(5) > .element-list > .menu-list > #item-3').click({ force: true })
        // dragTo
        // cy.get('#draggable')
        // cy.get('#simpleDropContainer > #droppable')
        cy.get('#draggable').realMouseMove(0, 30)
        // cy.get('#draggable').dragTo('#simpleDropContainer #droppable> p')
    });



    it('drag and drop 1', () => {
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
        const dataTransfer = new DataTransfer();

        cy.get('#column-a').trigger('dragstart', {
            dataTransfer
        });
        cy.get('#column-b').trigger('drop', {
            dataTransfer
        })
    });

    
    it('drag and drop 2', () => {
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop')

           cy.get('#column-a').dragTo('#column-b')

    });
    
    it('drag and drop 3', () => {
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop')

        cy.dragss('#column-a','#column-b')
    });

    it('hover 1', () => {
        cy.visit('https://www.amazon.co.uk/')
        cy.get('#sp-cc-rejectall-link').click()
        cy.get("#nav-link-accountList").trigger('mouseover')
    });
   
    it('hover 2', () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get("[title='Add to Cart']").first().realHover()
        cy.get("[title='Add to Cart']").first().should('css', 'background-color', 'rgb(216, 66, 14)')
    });

  
})