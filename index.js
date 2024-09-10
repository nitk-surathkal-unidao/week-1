const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// given a hash, return the color that created the hash
function findColor(hash) {
    // code here
    for(col of COLORS){
        const colBytes=utf8ToBytes(col);
        const colHash=sha256(col);
        if(toHex(colHash)===toHex(hash)){
            return col;
        }
        return null;
    }
}

module.exports = findColor;