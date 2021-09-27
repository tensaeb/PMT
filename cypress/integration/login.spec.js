describe("tests the login page", () => {
    it("logs in properly", () =>{
        cy.visit("/login")
        cy.get('#email').type('email@gmail.com') 
        cy.get('#one').find('#password').type('passw0rd',{force:true}) 
        cy.get("#two").find("#signinbtn").click({force:true})
        
        //.click()     
        //cy.get(".MuiButton-root").click({force:true})
    })
})