export class Siginphone{
    enterphoneno(whatsapp){
        cy.get('.react-international-phone-country-selector-button__dropdown-arrow').click()
        cy.contains('Pakistan').click({force:true})
        cy.get('.react-international-phone-input').type(whatsapp)
    }
    enterpassword(Passwordss){
        cy.get('#password').type(Passwordss)
    
    }
    checkRemme(){
        cy.get('.PrivateSwitchBase-input').click()
      }
      lognbtn(){
        cy.get(':nth-child(7) > .style_signupBtn__aclyK').click({force:true})
      }
}