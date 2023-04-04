describe('s', () => {

    const faker = require('faker')

    let name;
    beforeEach(() => {
        name = faker.name.firstName()
    });

    it('request', () => {
        cy.request({
            method: 'POST',
            body: {
                "userName": name,
                "password": "omerOMER1234,.$"
            },
            url: 'https://demoqa.com/Account/v1/User'
        }).its('body').then(val => {
            cy.log(val.username)
            cy.log(val.userID)

            expect(name).to.equal(val.username)
        })
        cy.log(name)
    });
    
    it('api', () => {
        cy.api({
            method: 'POST',
            body: {
                "userName": name,
                "password": "omerOMER1234,.$"
            },
            url: 'https://demoqa.com/Account/v1/User'
        }).its('body').then(val => {
            cy.log(val.username)
            cy.log(val.userID)

            expect(name).to.equal(val.username)
        })
        cy.log(name)
    });

    it('api and alias', () => {
        cy.api({
            method: 'POST',
            body: {
                "userName": name,
                "password": "omerOMER1234,.$"
            },
            url: 'https://demoqa.com/Account/v1/User'
        }).as('createUser')

        cy.get('@createUser').should('have.property', 'status', 201)
        cy.get('@createUser').its('headers').should('have.property', 'content-type', 'application/json; charset=utf-8')
        cy.get('@createUser').then(val => {
            cy.log(val)
        })



    });
})

// https://www.cypress.io/blog/2019/12/23/asserting-network-calls-from-cypress-tests/