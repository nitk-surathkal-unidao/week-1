const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];


// given a hash, return the color that created the hash
function findColor(hash) {
    // code here
    let matchableColor = COLORS.find((color)=>{
        let byteString = utf8ToBytes(color);
        let hashed = sha256(byteString);
        return toHex(hash)===toHex(hashed)
    })

    return matchableColor;
}

module.exports = findColor;



