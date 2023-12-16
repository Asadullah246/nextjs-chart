import { defineConfig } from "cypress";

export default defineConfig({
  fixturesFolder: false,
  screenshotOnRunFailure: false,
  video: false,
  e2e: {
    supportFile: false,
    baseUrl: "http://localhost:3000"
  }
});
