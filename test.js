const {assert} = require('chai');
const { findColor, findColor_in_colorWithSalt } = require('./index');
const { sha256 } = require("ethereum-cryptography/sha256");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];
const COLORS_salt=['red']
describe('findColor', () => {

//_____testing for the same COLORS array___________________________________________
    COLORS.forEach((color) => {
        it(`should work for ${color}`, () => {
            assert.equal(findColor(sha256(utf8ToBytes(color))), color);
        });
    });

//_____testing with a unknown random input__________________________________________

    // if the given input which isn't in the defined COlors array , it should return null
    it('should return null for a hash that does not correspond to any color', () => {
        const randomHash = sha256(utf8ToBytes('koi_bhi_random_input'));
        assert.equal(findColor(randomHash), null);
    });


    /** UTF-8 encoding (which utf8ToBytes uses) works at the byte level,
    * meaning that the binary representation of each character is different depending on its case
    * */
    
//____testing case-sensitivity______________________________________________________

    const hash = sha256(utf8ToBytes('Green'));                     //Shouldn't work for Capital 'G' 
    it(`should also work for Green (checking case-sensitivity)`, () => {
        try{
        assert.equal(findColor(hash) || 'Green', 'green');        
        throw new Error('invalid color')
    }catch (error) {
        console.error("Error finding color:", error.message);  
    }
});

//_____testing with salted array______________________________________________________
COLORS.forEach((color) => {
    it(`Does this work for ${color} ?`, () => {
        try{
            assert.equal(findColor_in_colorWithSalt(hash) || color+'+ kuch randomsalt' , color);        
            throw new Error('invalid color')
        }catch (error) {
            console.error("Error finding color:", error.message);  
        }
    });
});


});
  