const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

const hashes = [];

COLORS.forEach(function(color){
    let cBytes = utf8ToBytes(color);
    let h = sha256(cBytes);
    hashes.push(h);
});


// given a hash, return the color that created the hash
function findColor(hash) {
    // code here
    
    for(let i=0;i<hashes.length;i=i+1){
        let flag = 1;
        for(let j=0;j<32;j=j+1){
            if(hashes[i][j]!=hash[j]){
                flag = 0;
                break;
            }
        }
        if(flag == 1) return COLORS[i];
    }
    return null;
    

}

module.exports = findColor;