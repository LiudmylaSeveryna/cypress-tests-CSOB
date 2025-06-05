import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "2kj2k6",
  e2e: {
    baseUrl: 'https://www.csob.cz/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
