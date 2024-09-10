const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// creating a rainbow table for given colors
function rainbowtable(colors) {
    const hash = [];
    for(let i = 0; i < colors.length; i++) {
        let color = utf8ToBytes(colors[i]);
        color = sha256(color);
        hash.push(color);
    }
    return hash
}

const table = rainbowtable(COLORS);

// given a hash, return the color that created the hash
function findColor(hash) {
    for(let i = 0; i < COLORS.length; i++) {
        if(toHex(table[i]) === toHex(hash)) {
            return COLORS[i];
        }
    }
}

module.exports = findColor;