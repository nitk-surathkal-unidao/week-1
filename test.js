const {assert} = require('chai');
const findColor = require('./index');
const { sha256 } = require("ethereum-cryptography/sha256");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];
const COLORS_salt=['red']
describe('findColor', () => {


    COLORS.forEach((color) => {
        it(`should work for ${color}`, () => {
            
            assert.equal(findColor(sha256(utf8ToBytes(color))), color);
        });
    });

    // if the given input which isn't in the defined COlors array , it should return null
    it('should return null for a hash that does not correspond to any color', () => {
        const randomHash = sha256(utf8ToBytes('koi_bhi_random_input'));
        assert.equal(findColor(randomHash), null);
    });


    /** UTF-8 encoding (which utf8ToBytes uses) works at the byte level,
    * meaning that the binary representation of each character is different depending on its case
    * */
    
    const hash = sha256(utf8ToBytes('Green'));                     //Shouldn't work for Capital 'G' 
    it(`should also work for Green`, () => {
        try{
        assert.equal(findColor(hash) || 'Green', 'green');         //catch an AssertionError 
        throw new Error('invalid color')
    }catch (error) {
        console.error("Error finding color:", error.message);  
    }
});


  
});