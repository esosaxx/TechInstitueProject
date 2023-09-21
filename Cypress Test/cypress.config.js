const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //baseUrl: 'https://gorest.co.in',
    env: {
      url:'https://ecommerce-playground.lambdatest.io/index.php?route=account/login',
    },
  },
});
