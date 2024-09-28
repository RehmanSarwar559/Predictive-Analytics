export class homepage {
      selectinvestment(){
        cy.wait(10000)
        cy.get(':nth-child(3) > .MuiSlider-root').click('center')
      
      
      }
      selectyears(){
        cy.get(':nth-child(5) > .MuiSlider-root').click('center')
      }
      clickcalculate(){
        cy.get('.style_calculateBtn__YkOXV').click({force:true})
        
      }
      popbtn(){
       cy.xpath('//*[@id="__next"]/div[3]/div[3]/div/div[3]/button').click({force:true})
      }
      closepop(){
        cy.wait(10000)
        cy.get('.MuiSortByModal_modalcloseBtn__JchCq').click({force:true})
      }
      Topplanbtn(){
        cy.xpath('//*[@id="__next"]/div[2]/div[4]/div/div[3]/div[1]/div/div/button').click({force:true})
      }
      HighRentalYield(){
       cy.xpath('//*[@id="__next"]/div[2]/div[4]/div/div[3]/div[2]/div/div/button').click({force:true})
      }
      CombineAislider(){
        cy.wait(10000)
        cy.get('.slick-current > :nth-child(1) > .style_carouselUnderMain__H0Z_k > .style_carouselExperts__8307x').scrollIntoView(); 
        cy.wait(10000)
       cy.get('#__next > div.style_mobileAlignment__tGj1c.MuiBox-root.css-0 > div.style_sliderOuter__O5w0_.MuiBox-root.css-0 > div.slick-slider.style_sideStyleHuman__IcB5z.slick-initialized > div.slick-arrow.slick-next > svg').click({force:true})
       cy.wait(10000)
       cy.get('#__next > div.style_mobileAlignment__tGj1c.MuiBox-root.css-0 > div.style_sliderOuter__O5w0_.MuiBox-root.css-0 > div.slick-slider.style_sideStyleHuman__IcB5z.slick-initialized > div.slick-arrow.slick-prev > svg > path').click({force:true})
     }
     Aipickedoff(){
      cy.wait(10000)
      cy.get('.style_propertySection__hxrlu > .slick-slider > .slick-list > .slick-track > .slick-current').scrollIntoView(); 
      cy.get('#__next > div.style_mobileAlignment__tGj1c.MuiBox-root.css-0 > div.style_propertySection__hxrlu.MuiBox-root.css-0 > div.slick-slider.style_sideStyle___zSXA.slick-initialized > div.slick-arrow.slick-next > svg > path').click({force:true})
      cy.wait(10000)
     cy.get('#__next > div.style_mobileAlignment__tGj1c.MuiBox-root.css-0 > div.style_propertySection__hxrlu.MuiBox-root.css-0 > div.slick-slider.style_sideStyle___zSXA.slick-initialized > div.slick-arrow.slick-prev > svg').click({force:true})
     }
     voiceofsuccessslide(){
      cy.get('.selected > .style_carouselUnderMainStoryClient__nptPj').scrollIntoView(); 
      cy.wait(10000)
      cy.get('#__next > div.style_mobileAlignment__tGj1c.MuiBox-root.css-0 > div.style_clientStoriesBg__RE8_q.MuiBox-root.css-0 > div > div > svg').click({force:true})
      cy.wait(10000)
     cy.get('#__next > div.style_mobileAlignment__tGj1c.MuiBox-root.css-0 > div.style_clientStoriesBg__RE8_q.MuiBox-root.css-0 > div > div > svg:nth-child(1) > path').click({force:true})

     }

    
}



