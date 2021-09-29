
describe("tests the login page", () => {
    it("logs in", () =>{
        cy.visit("/login")
        cy.get('#email').type('email@gmail.com') 
        cy.get('#password').type('passw0rd',{force:true}) 
        cy.get("#signinbtn").click({force:true})
        cy.wait(5000)
        
    })

    
    it("add project", () =>{
      
        cy.get(".MuiBox-root-80 > .MuiButton-root").click({force:true})
        cy.get('#name').type("my project II")
        cy.get('#demo-simple-select').click({force:true})
        cy.get('#AGL').click({force:true})

        cy.get('#managers').click({force:true})
        cy.get('#developer').contains('blue black').click({force:true})
        //cy.get('#developer').should('have.text',"thee thy")
        cy.get('.MuiDialogActions-root > .MuiButton-textSecondary').click({force:true})
        cy.wait(5000)
    
    })
})



