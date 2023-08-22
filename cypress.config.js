const { defineConfig } = require('cypress');

module.exports = defineConfig({
  // reporter: 'cypress-mochaawesome-reporter',
  e2e: {
        setupNodeEvents(on, config) {
  //      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
  },
    //specPattern:'cypress/Integration/Samples/CypressSessionsLearning/S18-TestScreenshots.cy.js'
    // S16-CustomCommands.cy.js'
    // specPattern:'cypress/Integration/Samples/ProofOfConcept/POC_nopCommerce.cy.js'
    // POC_AmazonApp.cy.js'
    specPattern:'cypress/Integration/Samples/LambdaTest/LambdaTest-Certifications.cy.js'
},
})

// const capability = {
// 	"browserName": "Chrome",
// 	"browserVersion": "114.0",
// 	"LT:Options": {
// 		"username": "ajay.gupta1711",
// 		"accessKey": "9JXdSCuXPpj3RPLXrvZDcoCH0Nv8LGABla9PRcGyG7mEKvkyGM",
// 		"visual": true,
// 		"video": true,
// 		"platformName": "Windows 10",
// 		"headless": true,
// 		"network": true,
// 		"build": "LambdaTest",
// 		"project": "Cypress Automation",
// 		"name": "Drag & Drop and Input Form Validation",
// 		"tunnel": true,
// 		"w3c": true,
// 		"plugin": "node_js-node_js"
// 	}
// }