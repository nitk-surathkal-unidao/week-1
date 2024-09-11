const { utf8ToBytes, toHex } = require("ethereum-cryptography/utils");
const { sha256 } = require("ethereum-cryptography/sha256");

const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

const findColor = (hash) => {
  // Ensure hash is a byte array
  if (typeof hash === 'string') {
    hash = Buffer.from(hash, 'hex'); // Convert hex string to byte array if needed
  }

  for (let color of COLORS) {
    const colorBytes = utf8ToBytes(color);
    const colorHash = sha256(colorBytes);
    const colorHashHex = toHex(colorHash).toLowerCase();

    // Convert the hash to lowercase for comparison
    const inputHashHex = toHex(hash).toLowerCase();

    if (colorHashHex === inputHashHex) {
      return color;
    }
  }

  return null;
};

// Export the function for use in tests
module.exports = findColor;


