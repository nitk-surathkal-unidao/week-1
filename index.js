const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// given a hash, return the color that created the hash
function findColor(hash) {
    // code here
    var colour = COLORS.find(element => {
        const abytes = utf8ToBytes(element);
        const hashed = sha256(abytes);
        return toHex(hashed) === toHex(hash)
    })
    return colour;
    
}

module.exports = findColor;