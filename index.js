const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// given a hash, return the color that created the hash
function findColor(hash) {
    // code here
    for(let i=0;i<COLORS.length;i++){
        bytes=utf8ToBytes(COLORS[i]);
        hash_value=toHex(sha256(bytes));

        if(hash_value===toHex(hash)){
            return COLORS[i];
        }
    }
}


module.exports = findColor;