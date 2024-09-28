export class propertylisting{
    RedirectPage(){
        cy.get('.style_exploreBtn__ZggsX').click({force:true})
        cy.wait(10000)
    }
    SortbyROI(){
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-select').click({force:true})
        cy.contains('High to Low').click({force:true})
        cy.wait(10000)
        
        
    }
    SortbyPrice(){
        cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-select').click({force:true});
          cy.get('[data-value="lowToHigh"]').click({force:true})
    }
    Searchfieldd(){
        cy.get('.style_popularFieldStyl__8xABO').type('COTTAGE')
    }
    Typeefilter(){
        cy.get(':nth-child(1) > #panel1a-header').scrollIntoView(); 
        cy.get(':nth-child(1) > #panel1a-header').click({force:true})
        cy.contains('Ready').click({force:true})
       // cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .MuiFormGroup-root > :nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input').click({force:true})

    }
    categoryfilter(){
        cy.get(':nth-child(3) > #panel2a-header').click({force:true})
        cy.contains('Villa').click({force:true})
        //cy.get(':nth-child(3) > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel2a-content > .MuiAccordionDetails-root > .MuiFormGroup-root > :nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input').click({force:true})

    }
    Bedroomfilter(){
        cy.get(':nth-child(5) > #panel2a-header').click({force:true})
        cy.contains('2').click({force:true})    
    }
    initialinvestmentfilter(){
        cy.get(':nth-child(7) > #panel1a-header').scrollIntoView(); 
        cy.get(':nth-child(7) > #panel1a-header').click({force:true})
        cy.get(':nth-child(7) > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .MuiSlider-root')
        .click('center') 
        cy.get(':nth-child(7) > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .MuiAccordion_initialInvestBtn__HJjNR > .MuiBox-root > .MuiButtonBase-root').click({force:true})  

    }
    Locationfilter(){
        cy.get(':nth-child(9) > #panel1a-header').scrollIntoView(); 
        cy.get(':nth-child(9) > #panel1a-header').click({force:true})
        cy.contains('Dubai').click({force:true})   

    }
    Pricefilter(){
        cy.get(':nth-child(11) > #panel1a-header').scrollIntoView(); 
        cy.get(':nth-child(11) > #panel1a-header').click({force:true})
        cy.get(':nth-child(11) > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .MuiSlider-root').click('center')
        cy.get(':nth-child(11) > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .MuiAccordion_initialInvestBtn__HJjNR > .MuiBox-root > .MuiButtonBase-root').click({force:true})

    }
}