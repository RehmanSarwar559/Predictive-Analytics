export class contactuspage{
    Redirectionn(){
        cy.wait(1000)
        cy.get('.fill-current').click()
        cy.get('.style_resourceLink__Pxnvm > .mt-4').click({force:true})
        cy.contains('Contact Us').click({force:true})
    }
    naame(namee){
        cy.wait(10000)
       cy.get('#__next > div.style_contactWrap__UZ8XE > div.style_contactGetInTouchAndForm__n4E8u > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-6.css-iol86l > div > form > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-2.style_formUpperFields__3Q90u.css-isbt42 > div:nth-child(1) > div > div > div').type(namee)
       // cy.get('#name').type(namee)
    }
    emaiil(emaail){
        cy.get('#grid-last-name').type(emaail)
    }
    Message(messge){
        cy.get('[rows="6"]').type(messge)
    }
    Submitbtn(){
        cy.get('.style_submitBtn__hPlzt').click({force:true})
    }

}