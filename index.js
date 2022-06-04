const { readFile } = require('./utils/converter')

const add = async (path) => {
  return  await readFile(`${path}`)
}

module.exports = add
