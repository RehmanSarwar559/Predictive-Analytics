export class admindashboard{
    Dashboard(){
        cy.wait(10000)
        cy.get(':nth-child(3) > .style_mainHeading__63IT2').scrollIntoView()
        cy.get('[style="border: none; display: flex; align-items: center; height: 1rem; padding-top: 0.5rem;"] > .flex').click({force:true})
        cy.get('[data-value="lastWeek"]').click({force:true})
        cy.get('.MuiFormControl-root > .MuiInputBase-root').type('Readyplan')
    }
    bookingmanagment(){
        cy.wait(10000)
        cy.contains('Bookings').click({force:true})
        cy.get('.MuiFormControl-root > .MuiInputBase-root').type('Cottage')
       
    }
    Favourties(){
        cy.wait(10000)
        cy.contains('Favourites').click({force:true})
        cy.get('.MuiInputBase-root').type('Cottage')
    }
    Setting(){
        cy.wait(10000)
        cy.contains('Settings').click({force:true})
        
          cy.get('.MuiBox-root > div > img').click({force:true})
          // cy.get('#simple-tabpanel-0 > div > div:nth-child(1) > div > div:nth-child(1) > div')
        // .click();   
      // cy.get('input[type="file"]').select('cypress/fixtures/download.jfif');
        cy.wait(10000)
        cy.get('#country').type('Pakistan')
        cy.get('#address').type('Wah Cantt')
        cy.get(':nth-child(1) > form > .style_btnContainer__snp6t > button').click({force:true})
      
       
    }
    changepassword(){
        cy.get('.css-0 > :nth-child(2)').scrollIntoView()
        cy.get('#oldPassword').type('1234@Romi')
        cy.get('#newPassword').type('1234@Rom')
        cy.get('#confirmNewPassword').type('1234@Rom')
        cy.get(':nth-child(2) > form > .style_btnContainer__snp6t > button').click({force:true})
    }
    logoutdashboard(){
        cy.wait(10000)
        cy.get('.w-2\/4 > .flex').click();
        cy.get('.style_signoutOption__ez_PX').click({force:true});
    }
   
}