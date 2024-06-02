// 0100 1000 0110 1001 0010 0001
/**
 * Allocate a memory for these bit no more than
 * these bit not less, and then print them in utf-8
 */

const { Buffer } = require("node:buffer");
const memoryContainer = Buffer.alloc(3);

memoryContainer[0] = 0x48;
memoryContainer[1] = 0x69;
memoryContainer[2] = 0x21;

const buff = Buffer.from("486921", "hex");

const base = buff.toString("binary");

console.log(base.toString());
console.log(memoryContainer.toString());
