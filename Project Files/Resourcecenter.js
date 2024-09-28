export class Blog {
    redirectionflow(){
        cy.wait(1000)
        cy.get('.fill-current').click()
        cy.get('.style_resourceLink__Pxnvm > .mt-4').click({force:true})
        cy.contains('Blog').click({force:true})
    }
    Readmore(){
        cy.wait(10000)
        cy.get('.style_RecentCardsWrapper__Hc46_').scrollIntoView(); 
        //cy.get(':nth-child(1) > .style_carouselBlogsContent__ML4O1 > .style_carouselBlogsLast__ySyRw > .style_carouselBlogsReadmore__dCKWy')
        cy.contains('Read More').click({force:true})
    }
   
}