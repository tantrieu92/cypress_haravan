///<reference types="Cypress"/>

describe('Read Data Excel File', () => {
    it('Generate Data From Excel File',() => {
        cy.readXlsx(Cypress.env('fileName'), Cypress.env('sheet'), Cypress.env('pathFileJson'))
    })
})