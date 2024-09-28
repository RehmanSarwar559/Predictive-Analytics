export class Signups{

  enterwhatsapp(phone) {
   cy.get('.react-international-phone-country-selector-button__dropdown-arrow').click()
   cy.contains('Pakistan').click()
    cy.get('.react-international-phone-input').type(phone)
  }
  btnSendotp(){
    cy.get('.style_signupBtn__aclyK').click({force:true})  
  }
   enterverify(){
  
    cy.get('.style_signupBtn__aclyK').click({force:true})

  }
  Signupinfo(naam,mail,pass){
    cy.get('#name').type(naam)
    cy.get('#email').type(mail)
    cy.get('#password').type(pass)
    cy.get('.MuiButtonBase-root').click({force:true})
    cy.get('.style_buttonContainer__rEyOR > .style_signupBtn__aclyK').click({force:true})

  }
  SignupProfile(){
    cy.get(':nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input').click({force:true})
    cy.get(':nth-child(4) > .MuiButtonBase-root > .PrivateSwitchBase-input').click({force:true})
    cy.get(':nth-child(5) > .MuiButtonBase-root > .PrivateSwitchBase-input').click({force:true})
    cy.get('#demo-simple-select').click();
    cy.contains('AED 500K - AED 1M').click()
    cy.get('.style_signupBtn__aclyK').click({force:true})
  }
} 