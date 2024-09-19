export default {
  backtrace: true,
  format: ["html:cucumber-report.html"],
  import: ["support/world.js", "step-definitions/**/*.js"],
  paths: ["features/**/api.feature"],
  worldParameters: {
    baseUrl: "https://testapi.io/api/rmstest",
  },
};
