// Importing the readFile function from a local file named converter within a utils directory
const { readFile } = require('./utils/converter')

// Defining an asynchronous function named add which takes a path parameter
const add = async (path) => {
  try {
    // Checking if the path parameter is a string, if not, throwing an error
    if (typeof path !== 'string') throw new Error('path has to be a string')

    // Using the imported readFile function to asynchronously read the contents of the file at the specified path
    return await readFile(`${path}`)
  } catch (e) {
    // Catching any errors that occur during the execution of the function and rethrowing them with a descriptive message
    throw new Error(e.message)
  }
}

// Exporting the add function to make it available for use in other modules
module.exports = add
