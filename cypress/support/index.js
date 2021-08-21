// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
// require('cypress-plugin-tab')
import addContext from 'mochawesome/addContext'
// Import commands.js using ES2015 syntax:
import './command'
// const loginPage = require('../fixtures/Pages/LoginPage/login');
// import fs from 'file-system'

// Alternatively you can use CommonJS syntax:
// require('./commands')
let base64Image = ''

Cypress.Screenshot.defaults({
    screenshotOnRunFailure: true,
    onAfterScreenshot($el, props) {
        cy.readFile(props.path, 'base64').then((file) => {
            console.log('base 64 path: ' + props.path)
            base64Image = file;
        })
    },
})

Cypress.Cookies.defaults({
    preserve: ['channel', 'refreshToken','idToken','sas'],
  })

Cypress.on('test:after:run', (test, runnable) => {
    if (test.state === 'failed' && base64Image != '') {
        addContext({ test }, "data:image/png;base64," + base64Image);
        base64Image = '';
    }
})

// before(() => {
//     initial();
//   })