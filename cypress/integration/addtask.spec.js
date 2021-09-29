
describe("tests the login page", () => {
    it("logs in", () =>{
        cy.visit("/login")
        cy.get('#email').type('proj@gmail.com') 
        cy.get('#password').type('12qw3456',{force:true}) 
        cy.get("#signinbtn").click({force:true})
        cy.wait(5000)
        
    })

    
    it("assign task", () =>{
      
        cy.get(".MuiBox-root-24 > .MuiButton-root").click({force:true})
        cy.get('#title').type("first task")
        cy.get('#url').type('https://github.com/tensaeb/PMT', {force:true})
        
        cy.get('#demo-simple-select').click({force:true})
        cy.get('#projects').contains('Project 20').click({force:true})

        cy.get('#managers').click({force:true})
        cy.get('#developer').contains('aa').click({force:true})

        cy.get('#standard-multiline-static').type("instruction number one",{force:true})
       
        cy.get('.MuiDialogActions-root > .MuiButton-textSecondary').click({force:true})
       // cy.wait(5000)
    
    })
    it("check if assigned", () => {
        cy.visit("/login")
        cy.get('#email').type('aa@gmail.com') 
        cy.get('#password').type('aa123456',{force:true}) 
        cy.get("#signinbtn").click({force:true})
        cy.wait(5000)

        
    })
})



