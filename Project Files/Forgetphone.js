 export class forphone{
    Dropdownn(){
        cy.get('.react-international-phone-country-selector-button__dropdown-arrow').click({force:true})
        cy.contains('Pakistan').click({force:true})
    }
    enternumber(no){
        cy.get('.react-international-phone-input').type(no)
        cy.get('.style_signupBtn__aclyK').click({force:true})
    }
    enternewpass(nepass){
        
        cy.xpath ('//*[@id="password"]').type(nepass)
    }
    enterconfirmpass(confmpass){
        cy.xpath('//*[@id="confirmpassword"]').type(confmpass)
    }
    clikcbtnpass(){
        cy.get('.style_signupBtn__aclyK').click({force:true})
    }
      }