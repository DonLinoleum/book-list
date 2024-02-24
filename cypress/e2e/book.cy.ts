describe('Book',()=>{
    beforeEach(()=>{
        cy.visit("/")
    })

it ('has add book button',()=>{
    cy.get(".add-button").click()
})
})