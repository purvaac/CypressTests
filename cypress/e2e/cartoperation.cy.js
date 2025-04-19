/// <reference types="cypress" />

describe('Cart Operations - Add Product to Cart', () => {
    it('Should add the first product from Low to High filter into the cart and verify it', () => {
      cy.visit('https://www.saucedemo.com/');
      cy.viewport(1280, 720);
  
      // Login
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
  
      cy.url().should('include', '/inventory.html');
  
      // Apply Low to High filter
      cy.get('[data-test="product-sort-container"]').select('lohi');
  
      // Screenshot of filtered product list
      cy.screenshot('cart_filtered_list');
  
      // Extract the name of the first product (outside of .within())
      cy.get('.inventory_item_name').first().invoke('text').then((productName) => {
        // Save productName to alias manually
        const trimmedName = productName.trim();
        cy.wrap(trimmedName).as('selectedProductName');
  
        // Add the product to cart
        cy.get('.inventory_item').first().find('button').contains('Add to cart').click();
  
        // Screenshot after adding to cart
        cy.screenshot('after_add_to_cart');
  
        // Go to Cart
        cy.get('.shopping_cart_link').click();
  
        // Screenshot of cart page
        cy.screenshot('cart_page');
  
        // Verify product is in cart
        cy.get('@selectedProductName').then((expectedName) => {
          cy.get('.cart_item .inventory_item_name').should('contain.text', expectedName);
        });
      });
    });
  });
  