const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");


// the possible colors that the hash could represent
var COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];


const colorHashMap = new Map();
    COLORS.forEach(colr => { const hash = toHex(sha256(utf8ToBytes(colr)));
        colorHashMap.set(hash, colr);
    });
    

    
    function findColor(hash) {
        //code here
        return colorHashMap.get(toHex(hash)) || null;
    }

        // function to generate a random salt of a given length
    function generateSalt() {
        const saltLength = 16;
        const array = new Uint8Array(saltLength);
        crypto.getRandomValues(array)
        return toHex(array);
    }

    /** Salting the array element makes it very difficult for unauthorised person to guess/find the input */

    const colorWithSalt = new Map();
    const colors=COLORS.copyWithin()
    colors.forEach(COLOR => {
    const salt = generateSalt();                                // generate a random salt
    const hash = toHex(sha256(utf8ToBytes(COLOR+salt)));
        colorHashMap.set(hash, COLOR+salt);
    });

    function findColor_in_colorWithSalt(hash) {
        return colorWithSalt.get(toHex(hash)) || null;
    }



module.exports = {findColor, 
    findColor_in_colorWithSalt
}