const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ["red", "green", "blue", "yellow", "pink", "orange"];

// given a hash, return the color that created the hash
function findColor(hash) {
  // code here
  for (let i = 0; i < COLORS.length; i++) {
    const color = COLORS[i];
    const colorBytes = utf8ToBytes(color);
    const colorHash = sha256(colorBytes);
    const hexHash = toHex(colorHash);
    if (Buffer.compare(colorHash, hash) === 0) {
      return color;
    }
  }
  return null;
}
module.exports = findColor;
