const fs = require('fs')
const path = require('path')

const csvToJson = (csv) => {
  const lines = csv.split(/\r\n|\n/)
  const result = [];
  const headers = lines[0].split(',');
  const contents = lines.slice(1, lines.length - 1)
  const obj = {};
  for (const content of contents) {
    const currentline = content.split(',');
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }
    result.push(obj);
  }
  return JSON.parse(JSON.stringify(result)); //JSON
}

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

