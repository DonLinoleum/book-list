describe("Author",()=>{
    beforeEach(()=>{
        cy.visit("/authors")
    })
it('has add author button',()=>{
    cy.get('.add-button').click()
})
})