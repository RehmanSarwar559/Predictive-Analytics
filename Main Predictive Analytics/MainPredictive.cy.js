import { Signups } from "./Pagess/Signupp_Page";
import { Signinn } from "./Pagess/Signin_Page";
import { Siginphone } from "./Pagess/Signinphone";
import {Forgetmil} from "./Pagess/Forgetmail";
import { forphone } from "./Pagess/Forgetphone";
import { homepage } from "./Pagess/Homepage";
import { propertylisting } from "./Pagess/propertylisting";
import { pdetail } from "./Pagess/Propertydetail";
import { Blog } from "./Pagess/Resourcecenter";
import { aboutpage } from "./Pagess/Aboutus";
import { contactuspage } from "./Pagess/Contactus";
import { admindashboard } from "./Admindashboard";
 const SignU = new Signups()
 const Sigin = new Signinn()
 const loginphone = new Siginphone()
 const Formail = new Forgetmil()
 const Forphoon = new forphone()
 const hoompage = new homepage()
 const prolisting = new propertylisting()
 const pdetil = new pdetail()
 const blog = new Blog()
 const aboutus = new aboutpage()
 const contactobj = new contactuspage()
 const adminobj = new admindashboard()

 
 
 before(() => {
  cy.visit('https://staging.propvana.ai/')
});
  it('Test Case 1: Signup', () => {
    cy.wait(1000)
    cy.get('.fill-current').click()
    cy.get('.flex > .MuiButton-contained').click({force:true})
    cy.wait(10000)
    cy.get('.style_signupBtnLink__onAJ4').click({force:true})
    cy.wait(5000)
    SignU.enterwhatsapp('3319858687')
    SignU.btnSendotp()
    cy.wait(10000)
    SignU.enterverify()
     cy.wait(10000)
    SignU.Signupinfo('Rehman Sarwar','compan@yopmail.com', '1234@Romi');
    SignU.SignupProfile()   
  })
  it('Test Case 2: Signin with Email', () => {
    Sigin.Redirect()
    Sigin.enteremail('company@yopmail.com')
    Sigin.enterpassword('1234@Romi')
    Sigin.Rememberme()
    Sigin.Signinnbtn() 
  })
  it('Test Case 3: Signin with Phone No', () => {
    cy.wait(8000)
    cy.get('.fill-current').click()
    cy.contains('Sign in').click({force:true})
    cy.wait(8000)
    cy.get('#simple-tab-1').click({force:true})
    loginphone.enterphoneno('3188357008')
    loginphone.enterpassword('1234@Romi')
    loginphone.checkRemme()
    loginphone.lognbtn()
  
  })
  it('Test Case 4: Forget Password with E-mail', () => {
    cy.wait(10000)
    cy.get('.fill-current').click({force:true})
    cy.wait(10000)
    cy.get('.flex > .MuiButton-contained').click({force:true})
    cy.get('.style_forgotPassword__vDadm').click({force:true})
    cy.wait(10000)
    Formail.enterforgetmail('rehmansarwarwork@gmail.com')
    Formail.clkcontinue()
    cy.wait(10000)
    Formail.resetpassword('1234@Romi')
    Formail.confimpass('1234@Romi')
    Formail.Resetbtn({force:true})
  
  })
  it('Test Case 5: Forget Password with Phone', () => {
    cy.wait(10000)
    cy.get('.fill-current').click({force:true})
    cy.wait(10000)
    cy.get('.flex > .MuiButton-contained').click({force:true})
    cy.wait(10000)
    cy.get('.style_forgotPassword__vDadm').click({force:true})
    cy.wait(10000)
    cy.get('#simple-tab-1').click({force:true})
    Forphoon.Dropdownn()
    Forphoon.enternumber('3155012836')
    cy.wait(10000)
    Forphoon.enternewpass('1234@Rehman')
    Forphoon.enterconfirmpass('1234@Rehman')
    Forphoon.clikcbtnpass()
  })
  it('Test Case 6: Home Page Slider Selection', () => {
    hoompage.selectinvestment()
    hoompage.selectyears()
    hoompage.clickcalculate()
   // hoompage.popbtn()
   hoompage.closepop()
   //hoompage.Topplanbtn()
  // hoompage.HighRentalYield()
  hoompage.CombineAislider()
  hoompage.Aipickedoff()
  hoompage.voiceofsuccessslide()

  })
  it ('Test Case 7: Property Listing Page Header Filters', () => {
    prolisting.RedirectPage()
    prolisting.SortbyROI()
    prolisting.SortbyPrice()
    prolisting.Searchfieldd()
   
  })
  it('Test Case 7: Property Listing Page Side Filters', () => {
    prolisting.RedirectPage()
    prolisting.Typeefilter()
  
    })
    it('Test Case 8: Property Listing Page Side Filters', () => {
      prolisting.RedirectPage()
       prolisting.categoryfilter()
      
      })
      it('Test Case 9: Property Listing Page Side Filters', () => {
        prolisting.RedirectPage()
        prolisting.Bedroomfilter()
       
       })
       it('Test Case 10: Property Listing Page Side Filters', () => {
        prolisting.RedirectPage()
        prolisting.initialinvestmentfilter()
       
       })
       it('Test Case 11: Property Listing Page Side Filters', () => {
        prolisting.RedirectPage()
         prolisting.Locationfilter()
       
       })
       it('Test Case 12: Property Listing Page Side Filters', () => {
        prolisting.RedirectPage()
        prolisting.Pricefilter()
       
       })
       it('Test Case 13: Property Detail Page ', () => {
        prolisting.RedirectPage()
        prolisting.Pricefilter()
        pdetil.btnviewdetail()   
       })
       it('Test Case 14: Pivot Calculator on Property Detail Page ', () => {
        prolisting.RedirectPage()
        cy.wait(10000)
        prolisting.Pricefilter()
        pdetil.btnviewdetail()
        //pdetil.propertypic()
        pdetil.aiestimator()
        pdetil.pivotcalculator('57000','5')
        pdetil.RegisterPro()
       })
       it('Test Case 15: Resources Center & Blog Page ', () => {
        blog.redirectionflow()
        blog.Readmore()
       })
       it('Test Case 16: About US Page ', () => {
           aboutus.flow()
           //aboutus.video()
           aboutus.Agents()
       })
       it('Test Case 17: Contact Us Page ', () => {
        contactobj.Redirectionn()
        contactobj.naame('Rehman Sarwar')
        contactobj.emaiil('rehmansarwar781@gmail.com')
        contactobj.Message('Hello!! Im facing an issue')
        contactobj.Submitbtn()
    })
    it.only('Test Case 18: Admin Dashboard ', () => {
      Sigin.Redirect()
      cy.wait(10000)
      Sigin.enteremail('company@yopmail.com')
      Sigin.enterpassword('1234@Rom')
      Sigin.Rememberme()
      Sigin.Signinnbtn() 
     // adminobj.Dashboard()
     // adminobj.bookingmanagment()
     // adminobj.Favourties()
     // adminobj.Setting()
     // adminobj.changepassword()
      adminobj.logoutdashboard()
  })