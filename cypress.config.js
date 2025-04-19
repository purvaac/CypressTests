const { defineConfig } = require('cypress');
const fs = require('fs');

module.exports = defineConfig({
    projectId: "1s26wv",


  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      on('task', {
        writeToCSV({ filename, data }) {
          fs.writeFileSync(filename, data, 'utf8');
          return null;
        }
      });

      return config;
    },
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/json-reports/.jsons', // ✅ THIS is the fix
    overwrite: false,
    html: false,
    json: true
  },
  video: true,
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  screenshotOnRunFailure: true
});
