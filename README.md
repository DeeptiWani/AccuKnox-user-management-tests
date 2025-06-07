# AccuKnox-user-management-tests

Automated Playwright tests for the **OrangeHRM Admin Module User Management** functionality.  
This project uses **Playwright Test** framework with **Page Object Model (POM)** design for maintainability and scalability.

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Prerequisites](#prerequisites)  
- [Setup Instructions](#setup-instructions)  
- [Running Tests](#running-tests)  
- [Test Cases Covered](#test-cases-covered)  
- [Project Structure](#project-structure)  
- [Playwright Configuration](#playwright-configuration)  
- [Selectors & Waits](#selectors--waits)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Project Overview

This project automates the following user management test scenarios of the OrangeHRM Admin module, accessed at:

- **Login URL:** https://opensource-demo.orangehrmlive.com/web/index.php/auth/login  
- **Admin Module URL:** https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers  

Tests include login verification, adding users, form validations, searching users, and more. All test cases are implemented as individual `test` blocks using Playwright’s POM pattern, ensuring clean and reusable code.

---

## Prerequisites

- Node.js (v14 or higher recommended)  
- npm (comes with Node.js)  
- Internet connection to access OrangeHRM demo site  

---

## Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/DeeptiWani/AccuKnox-user-management-tests.git
cd AccuKnox-user-management-tests

## Install dependencies
npm install

## Install Playwright browsers
npx playwright install
