const { Buffer } = require('buffer');

const memoryContainer = Buffer.alloc(5); // 4 bytes (32 bits)

memoryContainer[0] = 0x4e; // 0100 1110
memoryContainer[1] = 0x69; // 0110 1001
memoryContainer[2] = 0x54; // 0101 0100
memoryContainer[3] = 0x69; // 0110 1001
memoryContainer[4] = 0x4e; // 0100 1110

console.log(memoryContainer);
console.log(memoryContainer.toString()); // NiTiN

// In case you want to store a number in buffer element
const numMemContainer = Buffer.alloc(1);
numMemContainer.writeInt8(64);

console.log(numMemContainer.toString('hex'));

/**
 * There are two methods to allocate buffer ->
 * 
 * 1. Buffer.alloc(bufferSize, valueToBeFilledWith);
 *  This method filed entire buffer with a value, which
 *  ends up overwriting existing data. default value is 0.
 * 
 * 2. Buffer.allocUnsafe(bufferSize);
 *  This method does not overwrite or fill the buffer
 *  It just allocate the chunk of memory. It could be
 *  unsafe as your existing data in buffer.
 *  
 *  Behind the scene Buffer.from() and Buffer.concat() 
 *  methods uses Buffer.allocUnsafe() method.
 * 
 */

console.log(Buffer.poolSize);

/**
 * When node start it's allocate 8KiB to itself to use
 * and it can only be used with Buffer.allocUnsafe()
 * also Buffer.allocUnsafeSlow() doesn't uses this poolSize.
 */

/**
 * TypedArray -> Uint8Array -> Buffer
 * - TypedArray object describe array-like view for of an
 *   underlying binary data buffer.
 *   JavaScript typed array are array-like objects that
 *   provide a mechanism for reading and writing raw binary
 *   data in a memory buffers.
 * 
 * - Unit8Array typed array represents unsigned 8-bit array
 *   (0 - 255)
 * 
 * - Buffer is subclass of Uint8Array. stores data
 */