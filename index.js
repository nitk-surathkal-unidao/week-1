const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes, hexToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// Precompute and cache (store in hashmap) for each color
const cache = new Map()
for(const color of COLORS)
    cache[toHex(sha256(utf8ToBytes(color)))] = color

// given a hash, return the color that created the hash
function findColor(hash) {
    return cache[toHex(hash)]
}

module.exports = findColor;