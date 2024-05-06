import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'custom-title',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    video: true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    testIsolation: false,
    downloadsFolder: "cypress/downloads",
    defaultCommandTimeout: 10000,
		pageLoadTimeout: 10000,
		waitForAnimations: true,
  },
});
