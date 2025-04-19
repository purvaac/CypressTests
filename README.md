# Automation Testing Assignment – Cypress | Swag Labs (SauceDemo)

## Objective

This project automates the testing of critical user flows on the **Swag Labs** e-commerce demo application using Cypress, including login validation, product filtering, cart actions, and the checkout process.

> **Note on URL Used:**
> The assignment originally referenced `https://www.saucedemo.com/v1/`, however, this version appears to be deprecated or inaccessible at the time of testing.
>
> As a result, I have used the current **live and functional version** of the application:  
> **`https://www.saucedemo.com`**  
>
> This ensures stable test execution, valid UI elements, and a complete user journey for automation.

---

## Tools & Technologies Used

| Category            | Stack                              |
|---------------------|--------------------------------------|
| Automation Tool     | Cypress (JavaScript)                |
| Test Framework      | Mocha + Chai                        |
| Data Format         | JSON                                |
| Reporting Tools     | Cypress Dashboard, Mochawesome      |
| Test Runner         | Cypress GUI & CLI                   |

---

## Project Setup Instructions

### Prerequisites

- Node.js (v18 or later)
- npm

### Setup Commands

```bash
# 1. Clone this repository
git clone https://github.com/purvaac/CypressTests.git
cd CypressTests

# 2. Install all dependencies
npm install

# 3. Open Cypress in interactive mode
npx cypress open

# 4. To run a specific test file, eg login test file:
npx cypress run --spec "cypress/e2e/login.cy.js"
```

Link For The Report Dashboard; https://cloud.cypress.io/projects/1s26wv/runs/1/test-results?actions=%5B%5D&browsers=%5B%5D&groups=%5B%5D&isFlaky=%5B%5D&modificationDateRange=%7B%22startDate%22%3A%221970-01-01%22%2C%22endDate%22%3A%222038-01-19%22%7D&orderBy=EXECUTION_ORDER&oses=%5B%5D&specs=%5B%5D&statuses=%5B%5D&testingTypesEnum=%5B%5D


