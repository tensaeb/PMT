
describe("tests the login page", () => {
    it("logs in properly", () =>{
        cy.visit("/login")
        cy.get('#email').type('email@gmail.com') 
        cy.get('#password').type('passw0rd',{force:true}) 
        cy.get("#signinbtn").click({force:true})
        //cy.get("#menu").should("have.text", "MENUS")
        cy.wait(7000)
        
    })

    it("profile", () =>{
        cy.get('.MuiBox-root-79 > :nth-child(2) > .MuiButton-label').click({force:true})
        
    })
  

    
})