const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// given a hash, return the color that created the hash
function findColor(hash) {
    // code here
    for (let i of COLORS) {
        
        const iB = utf8ToBytes(i);
        const iH = sha256(iB);
        const ihex = toHex(iH);
        if (ihex === toHex(hash)) {
            return i; 
        }
    }
    
    return null;
}

module.exports = findColor;