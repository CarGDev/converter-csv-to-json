const { readFile } = require('./utils/converter')

const add = async (path) => {
  try {
    if (typeof path !== 'string') throw new Error('path have to be an string')
    return  await readFile(`${path}`)
  } catch (e) {
    throw new Error(e.message)
  }
}

module.exports = add
