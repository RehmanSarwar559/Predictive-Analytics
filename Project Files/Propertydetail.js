 export class pdetail{
   btnviewdetail(){
    cy.wait(10000)
    cy.get(':nth-child(3) > .MuiCardContent-root > .MuiCard_cardContentWrap__QGd8i > .MuiCard_cardBtn__qRKEI > .MuiBox-root > a > .MuiButtonBase-root').click({force:true})
   }
   propertypic(){
    cy.wait(10000)
    //cy.get('.PropertyDetail_fullPageContainer__3IRGU').scrollIntoView(); 
    cy.get('.PropertyDetail_image1Styles__U_yz4').click({force:true})
   // cy.xpath('//*[@id="__next"]/div[6]/section/div[2]/svg/path').click({force:true})
   cy.get('#__next > div.MuiModal-root.css-8ndowl > section > div.ImageSlider_rightContainer__wWQbS.MuiBox-root.css-0 > svg > path').click({force:true})
   cy.get('.PropertyDetail_image1Styles__U_yz4').click({force:true})
   }
   aiestimator(){
    cy.wait(10000)
    cy.get('.PropertyDetail_graphBox__XqbJQ').scrollIntoView(); 
    cy.get('.MuiSelect-select').click({force:true})
    cy.contains('PVA').click({force:true})
   }
   pivotcalculator(purchaseprice,years){
    cy.wait(10000)
    cy.xpath('//*[@id="__next"]/div[2]/div[5]/div[1]/div/div[5]/div[2]/div[1]/div[1]/div/input').type(purchaseprice)
    cy.get(':nth-child(2) > .MuiInput-root > .MuiInput-input').type(years)
    cy.get('.PropertyDetail_profitBtnWrap__SgDy_ > .MuiBox-root > .MuiButtonBase-root').click({force:true})
    cy.get('.PropertyDetail_profitPivotSection__Pe3B8').scrollIntoView(); 
   }
   RegisterPro(){
    cy.get('.PropertyDetail_registerYourIntBtn__BcUgy').click({force:true})
   }
   

 }