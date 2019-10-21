const GSheetReader = require('g-sheet-api');
//import GSheetProcessor from '/node_modules/g-sheets-api/dist/gsheetsprocessor.js'

// test Sheet url
const demoSheetURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTDh5naSNQ0Qgd_gB8-m7hw88AFxJZn9qun8w5RJBveb82dd_I1PlqMtlqKvB6oIucUFLV6fabfFB1k/pub?gid=842493988&single=true&output=csv';

// test sheet id
const demoSheetId = '2PACX-1vTDh5naSNQ0Qgd_gB8-m7hw88AFxJZn9qun8w5RJBveb82dd_I1PlqMtlqKvB6oIucUFLV6fabfFB1k';

const options = {
  sheetId: '1-CmQumuz5ZiOvINhphEMgfplrJacQhD623RROcOBTAg',
  returnAllResults: true,
 /* filter: {
    'department': 'archaeology'
  }*/
}

GSheetProcessor(options, results => {

  const table = document.createElement('table');
  const header = table.createTHead();
  const headerRow = header.insertRow(0);
  const tbody = table.createTBody();

  // First, create a header row
  Object.getOwnPropertyNames(results[0]).forEach(colName => {
    const cell = headerRow.insertCell(-1);
    cell.innerHTML = colName;
  });

  // Next, fill the rest of the rows with the lovely data
  results.forEach(result => {
    const row = tbody.insertRow(-1);

    Object.keys(result).forEach(key => {
      const cell = row.insertCell(-1);
      cell.innerHTML = result[key];
    })
  });

  const main = document.querySelector('#output');
  main.innerHTML = "";
  main.append(table);
});