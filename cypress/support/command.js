// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
// let accountUser
// let loginPage

import * as index from './index'
import addContext from 'mochawesome/addContext'

// const product_info_page = require('../fixtures/Pages/ProductInformationPage/UL4/product_info_page');

let LOCAL_STORAGE_MEMORY = {};
let SESSION_STORAGE_MEMORY = {};
let COOKIE_CACHE = {};

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
//TODO: Read excel file
// example pathFileExcelToRead: "cypress/fixtures/excel/Auto_ProductRule_UL4.xlsm"
Cypress.Commands.add('readXlsx', function (pathFileInFixtures, sheetRead, pathFileJson) {
  cy.log(`Read File ${pathFileInFixtures} With sheet ${sheetRead}: Start`);
  cy.task('readXlsx', {
    file: `cypress/fixtures/${pathFileInFixtures}`,
    sheet: sheetRead,
    pathToSaveJsonFile: `cypress/fixtures/${pathFileJson}`
  })
    .then((workbook, rows) => {
      cy.log(`Read File ${pathFileInFixtures} With sheet ${sheetRead}: Done`);
    })
})

Cypress.Commands.add("clearLocalStorageCache", () => {
  LOCAL_STORAGE_MEMORY = {};
  SESSION_STORAGE_MEMORY = {};
  COOKIE_CACHE = {};
  cy.clearLocalStorage();
  cy.clearCookies();
});