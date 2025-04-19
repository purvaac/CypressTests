/// <reference types="cypress" />

describe('Checkout Process - Complete Order', () => {
    it('Should complete the purchase successfully', () => {
      cy.visit('https://www.saucedemo.com/');
      cy.viewport(1280, 720);
  
      // Login
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
  
      cy.url().should('include', '/inventory.html');
  
      // Filter: Price Low to High
      cy.get('[data-test="product-sort-container"]').select('lohi');
  
      // Add first product to cart
      cy.get('.inventory_item').first().find('button').contains('Add to cart').click();
  
      // After adding to cart
      cy.screenshot('checkout_added_to_cart');
  
      // Go to cart
      cy.get('.shopping_cart_link').click();
  
      // Cart page
      cy.screenshot('checkout_cart_page');
  
      // Click Checkout
      cy.get('[data-test="checkout"]').click();
  
      // Checkout info page
      cy.screenshot('checkout_info_page');
  
      // Fill in checkout info
      cy.get('[data-test="firstName"]').type('Testy');
      cy.get('[data-test="lastName"]').type('McTester');
      cy.get('[data-test="postalCode"]').type('12345');
      cy.get('[data-test="continue"]').click();
  
      // Overview before final purchase
      cy.screenshot('checkout_overview_page');
  
      // Finish checkout
      cy.get('[data-test="finish"]').click();
  
      // Final confirmation
      cy.screenshot('checkout_confirmation');
  
      // Assert confirmation message
      cy.get('.complete-header').should('contain.text', 'Thank you for your order!');
    });
  });
  