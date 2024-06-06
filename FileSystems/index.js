/********* Promise API *********/
const fsPromise = require('node:fs/promises');

(async () => {
  console.log(
    (
      'Using Promise: ' + (await fsPromise.readFile(__dirname + '/test.txt'))
    ).toString()
  );
})();

/********* Callback API *********/
const fsCallback = require('node:fs');

fsCallback.readFile(__dirname + '/test.txt', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Using Callback: ' + data);
});

/********* Sychrounous API *********/
const fsSync = require('node:fs');

const data = fsSync.readFileSync(__dirname + '/test.txt');
console.log('Using Sychronous Call: ', data);
