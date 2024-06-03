/********* Promise API *********/
const fsPromise = require("node:fs/promises");

(async () => {
  console.log(await fsPromise.readFile("test.txt"));
})()


/********* Callback API *********/
/********* Sychrounous API *********/