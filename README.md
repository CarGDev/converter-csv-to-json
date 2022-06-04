[![wakatime](https://wakatime.com/badge/user/d9f2f680-1923-4275-ac1c-aa218aef47fb/project/7e6cb8a3-a2ab-4f20-82cb-2892b9e9f516.svg)](https://wakatime.com/badge/user/d9f2f680-1923-4275-ac1c-aa218aef47fb/project/7e6cb8a3-a2ab-4f20-82cb-2892b9e9f516)

# converter-csv-to-json

convert csv file to json from a file in your system using nodejs

---
## how to use

Install the package in the node project
```bash
npm i async-convert-csv-to-json
touch index.js
```

Add the next code in a nodejs file where the csv file is located

```js
const path = require('path')
const converter = require('async-convert-csv-to-json')
const PATH =  path.join(__dirname,)

const filePath = `${PATH}/name_of_your_file.csv`;

async function convert () {
  const jsonConverted = await converter(filePath)
  console.log(jsonConverted)
}

convert()
```




