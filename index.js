const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// given a hash, return the color that created the hash
function findColor(hash) {
    for (let color of COLORS) {
        const colorBytes = utf8ToBytes(color); // bytes conversion
        const colorHash = sha256(colorBytes);
        const colorHex = toHex(colorHash);

        if (colorHex == toHex(hash)){
            return color;
        }

    }
    return null;
}

module.exports = findColor;