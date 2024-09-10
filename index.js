const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// given a hash, return the color that created the hash
function findColor(hash) {
    for(let color of COLORS){
        let keyByte = utf8ToBytes(color);
        let key = sha256(keyByte);
        if(toHex(key)===toHex(hash)){
            return color;
        }
    }
}

module.exports = findColor;