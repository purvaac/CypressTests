/// <reference types="cypress" />

const Papa = require('papaparse');

describe('Product Filtering - Price Low to High', () => {
  it('Should filter products from low to high and export names + prices to CSV', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.viewport(1280, 720);

    // Login
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    cy.url().should('include', '/inventory.html');

    // Screenshot BEFORE applying filter
    cy.screenshot('before_filtering');

    // Apply the Low to High filter
    cy.get('[data-test="product-sort-container"]').select('lohi');

    // Screenshot AFTER applying filter
    cy.screenshot('after_filtering');

    // Extract and save product list
    cy.get('.inventory_item').then((items) => {
      const products = [];

      items.each((index, item) => {
        const name = item.querySelector('.inventory_item_name')?.textContent.trim();
        const price = item.querySelector('.inventory_item_price')?.textContent.replace('$', '').trim();

        if (name && price) {
          products.push({ name, price });
        }
      });

      console.table(products); 

      const csv = Papa.unparse(products);
      const outputPath = 'cypress/downloads/products_low_to_high.csv';

      cy.task('writeToCSV', { filename: outputPath, data: csv });
    });
  });
});
