const { Buffer } = require("node:buffer");

const buff = Buffer.from("28092E0938094D0924094b09", "hex");

console.log(buff.toString("utf-16le") + ", world!");