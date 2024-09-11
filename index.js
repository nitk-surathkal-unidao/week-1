const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

//declaring a map to create the rainbow table
const rainbowTable=new Map();
// given a hash, return the color that created the hash
//filling the  Rainbow Table
for(let i=0;i<COLORS.length;i++){
    let toByte=utf8ToBytes(COLORS[i]);
    let SHA=sha256(toByte);
    rainbowTable.set(toHex(SHA),COLORS[i]);
}

function findColor(hash) {
    //checking if the corresponding entry exists
    if(rainbowTable.get(toHex(hash))){
        return rainbowTable.get(toHex(hash));
    }
}

module.exports = findColor;