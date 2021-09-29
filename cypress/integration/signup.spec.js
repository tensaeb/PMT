describe("tests the sign up page", () => {
    it("registers user", () =>{
        cy.visit("/register")
        
        cy.get('#firstName').type('first') 
        cy.get('#lastName').type('last', {force:true}) 
        cy.get('#email').type('email@gmail.com',{force:true}) 
        cy.get("#password").type('passw0rd',{force:true})
        cy.get("#re_password").type('passw0rd',{force:true})
        cy.get("#registerbtn").click({force:true})
        cy.get("#password-helper-text").should("not.exist")
        cy.get("#re_password-helper-text").should("not.exist")       
        cy.get("#email-helper-text").should("not.exist")
    })
    it("registers with wrong inputs", () =>{
        cy.visit("/register")
        
        cy.get('#firstName').type('first') 
        cy.get('#lastName').type('last', {force:true}) 
        cy.get('#email').type('email@gmail.com',{force:true}) 
        cy.get("#password").type('pass',{force:true})
        cy.get("#re_password").type('pass',{force:true})
        cy.get("#registerbtn").click({force:true})
        cy.get("#password-helper-text").should("not.exist")
    })
    it("unmaching passwords", () =>{
        cy.visit("/register")
        
        cy.get('#firstName').type('first') 
        cy.get('#lastName').type('last', {force:true}) 
        cy.get('#email').type('email@gmail.com',{force:true}) 
        cy.get("#password").type('passw0rd',{force:true})
        cy.get("#re_password").type('pass',{force:true})
        cy.get("#registerbtn").click({force:true})
        cy.get("#re_password-helper-text").should("not.exist")
    })

    it("invalid email address", () =>{
        cy.visit("/register")
        
        cy.get('#firstName').type('first') 
        cy.get('#lastName').type('last', {force:true}) 
        cy.get('#email').type('emailgmail',{force:true}) 
        cy.get("#password").type('passw0rd',{force:true})
        cy.get("#re_password").type('pass',{force:true})
        cy.get("#registerbtn").click({force:true})
        cy.get("#email-helper-text").should("not.exist")
    })
})