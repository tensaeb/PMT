
describe("open task", () => {
    it("open task", () =>{
        cy.visit("/login")
        cy.get('#email').type('aa@gmail.com') 
        cy.get('#password').type('aa123456',{force:true}) 
        cy.get("#signinbtn").click({force:true})

        //cy.get("#menu").should("have.text", "MENUS")
        cy.get('.MuiBox-root-26 > .MuiList-root > .MuiButtonBase-root').click({force:true})
        cy.wait(7000)
        
    })
})