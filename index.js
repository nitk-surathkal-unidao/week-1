const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

function findColor(hash) {
    for (let color of COLORS) {
        const bytes = utf8ToBytes(color);
        const colorHash = sha256(bytes);
        const hexColorHash = toHex(colorHash);
        if (hexColorHash === toHex(hash)) {
            return color;
        }
    }
    return undefined;
}
module.exports = findColor;
