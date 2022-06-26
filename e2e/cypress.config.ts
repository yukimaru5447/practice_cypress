import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/results",
    overwrite: false,
    html: false,
    json: true,
  },
  // reporter: "junit",
  // reporterOptions: {
  //   mochaFile: "results/my-test-output.xml",
  //   toConsole: true,
  // },
  // component: {
  //   devServer: {
  //     framework: "create-react-app",
  //     bundler: "webpack",
  //   },
  // },
});
