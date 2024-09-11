const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// given a hash, return the color that created the hash
function findColor(hash) {
    // code here
    for(let c of COLORS){
        const bytes = utf8ToBytes(c);
        const hashColor = sha256(bytes);
        if(toHex(hashColor)==toHex(hash)){
            return c;
        }
    }

}

module.exports = findColor;