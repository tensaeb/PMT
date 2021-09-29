describe("Home Page Tests", () => {
    it("Renders the home page correctly", () =>{
        cy.visit("/")
        cy.get("#container").should("exist")
        
    })
    it("Renders the About page and assert contents", () =>{
        cy.get("#abtbtn > .MuiButton-label > a").click({force:true})
        cy.get("#abtusdsc").should("have.text", "We are a team of developers dedicated to make the job of programmers easier all around the world. We strive to create a productive environment that can be of a great help to all dedicated software engineers.")
        cy.wait(5000)
    })

    it("Renders the Contact page and assert contents", () =>{
        cy.get("#contbtn > .MuiButton-label > a").click({force:true})
        cy.get("#getintouch").should("have.text", "Get In Touch")
        cy.wait(5000)
    })
})