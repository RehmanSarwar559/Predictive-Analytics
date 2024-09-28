export class aboutpage{
    flow(){
        cy.wait(1000)
        cy.get('.fill-current').click({force:true})
        cy.get('.style_comLink__y8_mn > .mt-4').click({force:true})
        cy.contains('About Us').click({force:true})
        
    }
    video(){
        cy.wait(10000)
        cy.get(':nth-child(8) > .style_jobsHead__87TPx').scrollIntoView()     
    }
    Agents(){
        cy.wait(10000)
        cy.get('.selected > .style_carouselUnderMain__rqQqL > :nth-child(3) > .style_ContactUsImageBox__zraEL').scrollIntoView() 
       // cy.get('#unified-runner').click({force:true})
        cy.get('#__next > div.style_mobileAboutus__mesQB.MuiBox-root.css-0 > div.carousel-root.style_carouselMain__Ib0Xu > div > svg').click({force:true})
        cy.get('.selected > .style_carouselUnderMain__rqQqL > :nth-child(1) > .style_signupBtn__Dmyx3').click({force:true})
        
    }
  
}