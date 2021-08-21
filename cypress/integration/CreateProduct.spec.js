///<reference types="Cypress"/>
import * as index from '../support/index.js'

describe(`Check rider AD for ${Cypress.env("customer")}`, () => {
  const dataJsonArray = require(`../fixture/GenerateData/Login.json`)
  let description = '';
  let times = 0;
  let dataExcelArray = [];
  let fromTestCase = Cypress.env("fromTestCase") - 1;
  let toTestCase = Cypress.env("toTestCase");
  for (let i = fromTestCase; i < toTestCase; i++) {
    // dataExcel = dataJsonArray[i];
    dataExcelArray.push(dataJsonArray[i])
  }
  dataExcelArray.forEach(data => {
  description = `${data['TEST SCENARIO IDENTIFICATION']} - ${data.Title}`;
    describe('Haravan demo Create Product', function() {
      it('delete cookie', function () {
        cy.clearLocalStorageCache();
      })
      it(`Access Haravan Admin Page`, () => { //Khai báo TestStep
          cy.visit('https://nguyenntt-1.sku.vn/admin/')

          cy.get("div[class='hrv-account--header-title']").should('have.text', 'Haravan - Đăng nhập'); //Kiểm tra title màn hình login có nội dung "Haravan - Đăng nhập"
          
          // Điền thông tin username
          cy.get("input[id='Username']").type(data.Email).should('have.value', data.Email)
          cy.get("input[id='Password']").type(data.Password).should('have.value', data.Password)
      })
    })
  })
})