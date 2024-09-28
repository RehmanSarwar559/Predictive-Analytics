export class Forgetmil {
  enterforgetmail(Formail){
    cy.wait(10000)
    cy.xpath('//*[@id="email"]').type(Formail);
   }
  clkcontinue(){
    cy.xpath ('//*[@id="simple-tabpanel-0"]/div/div/form/div[2]/button').click({force:true})
  }
  resetpassword(newpasswords){
    cy.wait(10000)
    cy.get('#password').type(newpasswords)
    
  }
  confimpass(confrmpassword){
    cy.get('#confirmpassword').type(confrmpassword)
  }
  Resetbtn(){
    cy.get('.style_signupBtn__aclyK').click({force:true})
  }
}