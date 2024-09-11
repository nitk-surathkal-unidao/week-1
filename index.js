const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

function findHash (string) {
    const strBytes = utf8ToBytes(string);

    const hash = sha256(strBytes);

    return hash;
}

// given a hash, return the color that created the hash
function findColor(hash) {
    // code here
    for (let i = 0; i < COLORS.length; i++) {
        if (toHex(findHash(COLORS[i])) === toHex(hash)) {
            return COLORS[i];
        }
    }
}
module.exports = findColor;