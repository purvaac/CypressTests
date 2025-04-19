/// <reference types="cypress" />

describe('Login Test - Swag Labs (Screenshots + Video)', () => {
    const baseURL = 'https://www.saucedemo.com';
  
    it('Should login each user and take screenshots', () => {
      cy.fixture('loginData.json').then((users) => {
        users.forEach((user) => {
          cy.visit(`${baseURL}/`);
          cy.viewport(1280, 720);
  
          cy.get('[data-test="username"]', { timeout: 10000 })
            .should('be.visible')
            .clear()
            .type(user.username);
  
          cy.get('[data-test="password"]')
            .should('be.visible')
            .clear()
            .type(user.password);
  
          // Screenshot after entering credentials (after typing completes)
          cy.then(() => {
            cy.screenshot(`${user.username}_entered_credentials`);
          });
  
          // Submit login
          cy.get('[data-test="login-button"]').click();
  
          if (user.username === 'locked_out_user') {
            cy.get('[data-test="error"]').should('be.visible').and('contain.text', 'locked out');
  
            // Screenshot after failed login
            cy.then(() => {
              cy.screenshot(`${user.username}_login_failed`);
            });
          } else {
            cy.url().should('include', '/inventory.html');
            cy.get('.inventory_list').should('be.visible');
  
            // Screenshot after successful login
            cy.then(() => {
              cy.screenshot(`${user.username}_login_success`);
            });
  
            // Logout to reset state
            cy.get('#react-burger-menu-btn').click();
            cy.get('#logout_sidebar_link').click();
          }
        });
      });
    });
  });
  