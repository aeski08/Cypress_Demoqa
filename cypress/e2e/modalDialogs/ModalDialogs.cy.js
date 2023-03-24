describe('modal dialogs', () => {
  it('small modal', () => {
    cy.visit('https://demoqa.com/modal-dialogs');
    cy.get('#showSmallModal').click();

    cy.get('.modal-content')
      .should('be.visible')
      .invoke('outerWidth')
      .should('eql', 300);

    cy.get('.modal-content').invoke('outerHeight').should('eql', 220.8);

    cy.get('#example-modal-sizes-title-sm').should('include.text', 'Small');
  });

  it('large modal', () => {
    cy.visit('https://demoqa.com/modal-dialogs');
    cy.get('#showLargeModal').click();
    cy.get('.modal-content')
      .should('be.visible')
      .invoke('outerWidth')
      .should('eql', 800);

    cy.get('.modal-content').invoke('outerHeight').should('eql', 332.8);

    cy.get('#example-modal-sizes-title-lg').should('include.text', 'Large');
  });

  it.only('both', () => {
    cy.visit('https://demoqa.com/modal-dialogs');
    cy.get('#showSmallModal').click();
    // const smallWidth = 
    cy
      .get('.modal-content')
      .invoke('outerWidth')
      .then((name) => {
        name.toString().replace('[^0-9]', '');
        cy.log(name);
        cy.wrap(name).as('smallWidth')
        return name;
      });

    cy.log('@smallWidth');
    cy.get('#closeSmallModal').click();

    cy.get('#showLargeModal').click();
    // const largeWidth = 
    cy
      .get('.modal-content')
      .invoke('outerWidth')
      .then((name) => {
        name.toString().replace('[^0-9]', '');
        cy.log(name);
        cy.wrap(name).as('largeWidth')
        return name;
      });
    cy.log('@largeWidth');
    // cy.should(largeWidth > smallWidth);
  });
});
