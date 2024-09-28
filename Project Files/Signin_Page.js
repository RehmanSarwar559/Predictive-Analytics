export class Signinn{
    Redirect(){
        cy.wait(8000)
        cy.get('.fill-current').click()
        cy.contains('Sign in').click({force:true})
        cy.wait(8000) 
    }
    enteremail(emaill){
        cy.wait(10000)
        cy.get('#email').type(emaill)
    }
    enterpassword(pasword){
        cy.get('#password').type(pasword)
        cy.get('[data-testid="VisibilityOffIcon"] > path').click({force:true})
    
    }
    Rememberme(){
        cy.get('.PrivateSwitchBase-input').click({force:true})
    }
    Signinnbtn(){
        cy.get(':nth-child(7) > .style_signupBtn__aclyK').click({force:true})
    }

}