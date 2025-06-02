import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.csob.cz/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
