

describe("tests the login page", () => {
    it("logs in properly", () =>{
        cy.visit("/login")
        cy.get('#email').type('email@gmail.com') 
        cy.get('#password').type('passw0rd',{force:true}) 
        cy.get("#signinbtn").click({force:true})
        cy.wait(5000)
        
    })

    it("logs out successfully", () =>{
     cy.get(".MuiBox-root-79 > #logoutbtn > .MuiButton-label").click({force:true})
    })
})