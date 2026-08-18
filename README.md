# Predictive Analytics — Test Automation Suite

This repository contains a [Cypress](https://www.cypress.io/) end-to-end (E2E) test automation suite for **Propvana**, a real-estate predictive-analytics web platform (staging environment: `https://staging.propvana.ai/`). The platform lets users browse properties, get AI-driven ROI/rental-yield predictions, and run investment calculators; it also has an admin dashboard for managing bookings and users.

The suite uses the Page Object Model (POM) pattern, keeping UI selectors and reusable actions in dedicated page-object files, separate from the test scenarios themselves.

## What This Suite Tests

The main spec (`MainPredictive.cy.js`) walks through the full user journey on the platform:

- **Authentication**
  - Sign up via WhatsApp/phone number + OTP verification, followed by profile setup
  - Sign in with email
  - Sign in with phone number
  - Forgot password via email
  - Forgot password via phone number
- **Home Page**
  - Investment/years slider selection and running the ROI calculator
  - Browsing AI-picked and "voice of success" carousels
- **Property Listing Page**
  - Sorting by ROI and price
  - Keyword search
  - Filtering by type, category, bedrooms, initial investment, location, and price
- **Property Detail Page**
  - Viewing property details
  - Running the AI/PVA rental estimator
  - Using the pivot (profit) calculator with purchase price and investment horizon
  - Registering interest in a property
- **Resource Center / Blog** — navigation and "Read More" flow
- **About Us** — page navigation and agent carousel
- **Contact Us** — submitting the contact form
- **Admin Dashboard** — sign-in and logout flow (dashboard, bookings, favourites, and settings actions are present but currently commented out)

## Repository Structure

```
Predictive-Analytics/
├── Main Predictive Analytics/
│   └── MainPredictive.cy.js     # Main Cypress spec — runs the full end-to-end user journey
└── Project Files/
    ├── Signupp_Page.js           # Sign-up flow (WhatsApp/OTP, profile info)
    ├── Signin_Page.js             # Sign-in with email
    ├── Signinphone.js             # Sign-in with phone number
    ├── Forgetmail.js              # Forgot password via email
    ├── Forgetphone.js             # Forgot password via phone number
    ├── Homepage.js                # Home page sliders, calculator, carousels
    ├── propertylisting.js         # Property listing sort/search/filters
    ├── Propertydetail.js          # Property detail page, AI estimator, pivot calculator
    ├── Resourcecenter.js          # Resource Center / Blog
    ├── Aboutus.js                 # About Us page
    ├── Contactus.js               # Contact Us form
    └── Admindashboard.js          # Admin dashboard actions
```
