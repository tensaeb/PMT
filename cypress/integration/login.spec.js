
describe("tests the login page", () => {
    it("logs in properly", () =>{
        cy.visit("/login")
        cy.get('#email').type('email@gmail.com') 
        cy.get('#password').type('passw0rd',{force:true}) 
        cy.get("#signinbtn").click({force:true})
        cy.get("#menu").should("have.text", "MENUS")
        cy.wait(7000)
        
    })
  

    it("log in with wrong credentials", () => {
        cy.visit("/login")
        cy.get('#email').type('email@gmail.com') 
        cy.get('#password').type('pass',{force:true}) 
        cy.get("#signinbtn").click({force:true})
        cy.get("#menu").should("have.text", "MENUS")
        cy.wait(7000)
    })

    it("log in with non existing account", () => {
        cy.visit("/login")
        cy.get('#email').type('black@gmail.com') 
        cy.get('#password').type('pass1234',{force:true}) 
        cy.get("#signinbtn").click({force:true})
        cy.get("#menu").should("have.text", "MENUS")
        cy.wait(7000)
    })
})