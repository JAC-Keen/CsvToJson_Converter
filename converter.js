let csvtojson = require('convert-csv-to-json');

let inputfile = 'customer-data.csv';
let outputfile ='output.json'
csvtojson.fieldDelimiter(',') .getJsonFromCsv(inputfile);
csvtojson.formatValueByType().getJsonFromCsv(inputfile);
csvtojson.generateJsonFileFromCsv(inputfile,outputfile);