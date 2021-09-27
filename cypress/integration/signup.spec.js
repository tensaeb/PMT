describe("tests the sign up page", () => {
    it("registers user", () =>{
        cy.visit("/register")
        
        cy.get('#firstName').type('first') 
        cy.get('#lastName').type('last', {force:true}) 
        cy.get('#email').type('email@gmail.com',{force:true}) 
        cy.get("#password").type('passw0rd',{force:true})
        cy.get("#re_password").type('passw0rd',{force:true})
        cy.get("#registerbtn").click({force:true})

        //cy.get('#one').find('#password').type('passw0rd',{force:true}) 
        //cy.get("#two").find("#signinbtn").click({force:true})
       
        
        
    })
})