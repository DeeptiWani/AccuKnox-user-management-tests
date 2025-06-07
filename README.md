# AccuKnox-user-management-tests

Automated Playwright tests for the **OrangeHRM Admin Module User Management** functionality.  
This project uses **Playwright Test** framework with **Page Object Model (POM)** design for maintainability and scalability.

---

## Table of Contents

- [📌 Project Overview](#project-overview)  
- [🔧 Prerequisites](#prerequisites)  
- [⚙️ Setup Instructions](#setup-instructions)  
- [🚀 Running Tests](#running-tests)  
- [✅ Test Cases Covered](#test-cases-covered)  
- [🛠️ Playwright Configuration](#playwright-configuration)  
- [🔍 Selectors & Waits](#selectors--waits)  
- [🤝 Contributing](#contributing)  

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

## Running Tests
Run all tests headlessly (no browser UI):
npx playwright test

Run all tests with headed browser (visible UI):
npx playwright test --headed

Run tests from a specific test file (e.g., Admin tests):
npx playwright test tests/admin.spec.js

Generate and view HTML test report (saved automatically after test run):
npx playwright show-report



## Test Cases Covered
Test Case ID	Description
TC_001	Verify successful login
TC_002	Verify Add User button is clickable
TC_003	Verify Add User modal opens
TC_004	Verify Add User form validation
TC_005	Verify user can be added
TC_006	Verify Search User functionality
TC_007	Verify Edit User functionality
TC_008	Verify Delete User functionality
TC_009	Verify Reset Password functionality
TC_010	Verify User Role dropdown values
TC_011	Verify Status dropdown values
TC_012	Verify error messages on invalid input


AccuKnox-user-management-tests/
├── automation/
│   ├── loginPage.js
│   └── adminPage.js
│   ├── tc_001_login.test.js
│   ├── tc_002_admin_navigation.test.js
│   ├── tc_003_create_user.test.js
│   ├── tc_004_invalid_login.test.js
│   ├── tc_005_mandatory_fields.test.js
│   ├── tc_006_update_user.test.js
│   ├── tc_007_search_user.test.js
│   ├── tc_008_delete_user.test.js
│   ├── tc_009_empty_fields_validation.test.js
│   ├── tc_010_deleted_user_login.test.js
│   ├── tc_011_role_permissions.test.js
│   └── tc_012_duplicate_username.test.js
|   ├── playwright.config.js
|   └── package.json



Playwright Configuration
The playwright.config.js file handles:
Global setup
Default test timeouts
Test report generation

Selectors & Waits
Uses data-testid attributes where available
Implements Playwright’s waitForSelector() to ensure stability
Uses smart locator strategies for interactive elements

Contributing
Contributions are welcome! Follow these steps:
Fork the repository
Create a new feature branch
Submit a pull request with detailed changes


