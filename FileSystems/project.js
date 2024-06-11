const fs = require('node:fs/promises');
const { format } = new Intl.DateTimeFormat('en-IN', {
  dateStyle: 'full',
  timeStyle: 'full',
});

const filePath = __dirname + '/commands.txt';
// const codeFile = __dirname + "/project.js";

// open -> file descriptor - a number assigned to a open file (it's like id)
// read or write ->

(async () => {
  const commandHandler = await fs.open(filePath, 'r');
  const watcherOnTheWall = fs.watch(filePath);
  // const watcherForCode = watch(codeFile);

  commandHandler.on("change", async () => {
    // Size of our file in bytes
    const size = (await commandHandler.stat()).size;
    // allocating a buffer in our memory to store file data
    const buff = Buffer.alloc(size);
    // location from which we want to start filling buffer
    const offset = 0;
    // bytes we want to read from file
    const length = buff.byteLength;
    // position from which we want to start reading file
    const position = 0;

    // beginning from start and going till end
    await commandHandler.read(
      buff,
      offset,
      length,
      position
    );

    console.log(buff.toString());
  })


  
  for await (evt of watcherOnTheWall) {
    if (evt.eventType === 'change') {
      commandHandler.emit(evt.eventType);
    }
  }
})();
