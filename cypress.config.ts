import { defineConfig } from "cypress";
const cypressSplit = require('cypress-split')

export default defineConfig({
  e2e: {
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      reportFilename: '[name].html',
      overwrite: true,
      html: true,
      json: true,
    },
    video: true,
    setupNodeEvents(on, config) {
      cypressSplit(on, config)
      return config
    },
    testIsolation: false,
    downloadsFolder: "cypress/downloads",
    defaultCommandTimeout: 10000,
		pageLoadTimeout: 10000,
		waitForAnimations: true,
  },
});
