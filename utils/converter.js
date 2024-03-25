const fs = require('fs')
const path = require('path')

/**
 * Converts CSV data to JSON format.
 * @param {string} csv - The CSV data to be converted.
 * @returns {Array<Object>} An array of objects representing the converted JSON data.
 */
const csvToJson = (csv) => {
  const lines = csv.split(/\r\n|\n/)
  const result = [];
  const headers = lines[0].split(',');
  const contents = lines.slice(1, lines.length - 1)
  for (const content of contents) {
    const obj = {};
    const currentline = content.split(',');
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }
    result.push(obj);
  }
  return JSON.parse(JSON.stringify(result)); //JSON
}

/**
 * Reads a CSV file and converts it to JSON.
 * @async
 * @param {string} pathFile - The path to the CSV file.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of objects representing the CSV data in JSON format.
 * @throws {Error} Throws an error if the file extension is not '.csv'.
 */
exports.readFile = async (pathFile) => {
  const checkExt = path.extname(pathFile)
  if (checkExt !== '.csv') throw new Error('Wrong extension file')
  const result = new Promise((resolve, reject) => {
    fs.readFile(`${pathFile}`, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      const result = csvToJson(data)
      resolve(result) 
    });
  })

  return result
}
