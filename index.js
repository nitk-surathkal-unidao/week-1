const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

const COLORS = ["red", "green", "blue", "yellow", "pink", "orange"];

// Create a map to store the hashes of the colors
const colorHashMap = new Map();

// Precompute the hashes and store them in the map
COLORS.forEach((color) => {
  const hash = toHex(sha256(utf8ToBytes(color)));
  colorHashMap.set(hash, color);
});

function findColor(hash) {
  // Convert the given hash to hex and look it up in the map
  const hexHash = toHex(hash);
  return colorHashMap.get(hexHash) || null; // Return the color if found, otherwise null
}

module.exports = findColor;
