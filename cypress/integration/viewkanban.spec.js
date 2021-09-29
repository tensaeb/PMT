
describe("open task", () => {
    it("open task", () =>{
        cy.visit("/login")
        cy.get('#email').type('aa@gmail.com') 
        cy.get('#password').type('aa123456',{force:true}) 
        cy.get("#signinbtn").click({force:true})

        //cy.get("#menu").should("have.text", "MENUS")
        cy.get('.MuiTabs-flexContainer > [tabindex="-1"]').click({force:true})
        cy.wait(7000)
        
    })
})