const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// given a hash, return the color that created the hash
function findColor(hash) {
    let result = undefined;
    for(let i =0;i<COLORS.length;i++){
        const color_byte = utf8ToBytes(COLORS[i]);
        const color_hash = sha256(color_byte);
        if(toHex(color_hash) == toHex(hash))
            result = COLORS[i];
    }
    return result;
}

module.exports = findColor;