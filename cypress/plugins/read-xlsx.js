const fs = require('fs');
const XLSX = require('xlsx');

const read = ({ file, sheet, pathToSaveJsonFile }) => {
    const buf = fs.readFileSync(file);
    const workbook = XLSX.read(buf, { type: 'buffer' });
    //const worksheetlist = workbook.SheetNames;
    const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
    fs.writeFile(pathToSaveJsonFile, JSON.stringify(rows, null, 2))

    return workbook, rows
}
module.exports = {
    read,
}

