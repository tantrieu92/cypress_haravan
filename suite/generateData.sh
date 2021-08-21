!#!/bin/bash
cd /Users/hello/portal---cypress
clear
npm run precy:run
npx cypress run --headless --browser chrome --env fileName=cypress/fixture/SampleData.xlsx,sheet=Login,pathFileJson=cypress/fixture/GenerateData/Login.json --spec cypress/intergration/readExcelFile.spec.js
