
# FitEmpire – Gym Subscription Management System (Frontend)

## 1. Overview

FitEmpire is a frontend gym subscription management system designed to move traditional gym operations to a modern, web-based platform. It allows users to browse and compare gym plans, view pricing and benefits, access a basic nutrition section, and explore membership details through a clean, responsive UI. The project focuses on practising modern frontend development with HTML, CSS/SCSS, Bootstrap, JavaScript, and jQuery, and is designed to integrate with a Firebase backend for data and auth.

## 2. Features

### User-Side Features

- View available subscription plans (e.g. basic, standard, premium)  
- See plan details: pricing, benefits, and duration  
- Explore membership information and gym services  
- Access a nutrition section with basic diet / guidance content  
- Responsive design for desktop and mobile devices  

### Admin / System Concept (from project design)

- Conceptual support for managing subscription plans  
- Conceptual support for managing user profiles and appointments  
- Reporting and analytics planned in the system design (subscriptions, usage, etc.)

(Implementation of admin logic may be backend-dependent; this repo focuses on the frontend.)

## 3. Tech Stack

- HTML  
- CSS / SCSS  
- Bootstrap (layout and responsive components)  
- JavaScript  
- jQuery (interactive UI behaviour)  
- Designed to connect to:
  - Firebase (Authentication, Realtime Database, etc.) – as described in the project report

## 4. Project Structure (example)

Adjust to your actual files, for example:

```text
GYM_SUBSCRIPTION_MANAGEMENT_SYSTEM_FITEMPIRE/
│
├── index.html          # Main entry page
├── /css                # Compiled CSS files
├── /scss               # SCSS source files
├── /js                 # JavaScript & jQuery logic
└── /assets             # Images, icons, logos
```

## 5. How to Run

1) Clone the repository

```bash
git clone https://github.com/khallude/GYM_SUBSCRIPTION_MANAGEMENT_SYSTEM_FITEMPIRE.git
cd GYM_SUBSCRIPTION_MANAGEMENT_SYSTEM_FITEMPIRE
```

2) Open the project

- Option 1: Open `index.html` directly in your browser  
- Option 2 (recommended for development): Use a simple static server (e.g. Live Server in VS Code) to serve the files

3) (Optional) Connect Firebase

- Add your Firebase configuration script to the relevant JS or HTML file  
- Configure Authentication and Realtime Database according to your Firebase project if you want to make the app dynamic

## 6. Future Improvements

- Hook the frontend fully to Firebase (auth, subscriptions, appointments)  
- Add real user registration, login, and subscription management  
- Implement appointment booking, trainer scheduling, and payment integration  
- Extend the nutrition section with personalised diet plans or goal-based suggestions  
- Add basic analytics dashboards for gym owners

## 7. Credits
FitEmpire – Gym Subscription Management System
Developed as part of an academic project focusing on web application design and gym management workflows.

FitEmpire – Gym Subscription Management System  
Developed as part of an academic project focusing on web application design and gym management workflows.
