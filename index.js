const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// given a hash, return the color that created the hash
function findColor(hash) {
    for(let i =0 ; i<COLORS.length ; i++){
        temp = utf8ToBytes(COLORS[i])
        temp2  = sha256(temp);
        cmp1 = toHex(hash);
        cmp2 = toHex(temp2);
        if (cmp2 == cmp1){
            return COLORS[i];
        }
    }
}

module.exports = findColor;
