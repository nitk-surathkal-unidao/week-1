const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// given a hash, return the color that created the hash
function findColor(hash) {
    // code here
       const colorHashMap = new Map();
    COLORS.forEach(colr => { const hash = toHex(sha256(utf8ToBytes(colr)));
    colorHashMap.set(hash, colr);
    });
  return  colorHashMap.get(toHex(hash)) || null;
}

module.exports = findColor;
