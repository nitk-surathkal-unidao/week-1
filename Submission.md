In this update, I have used two key functions for color hashing and retrieval:

### findColor(hash):

This function retrieves the color corresponding to a given hash from the pre-defined color set in the index.js . It uses a Map datastructure to store the mappings of hash - color and returns the color if found, or null if the hash does not match any color.  The fundamental approach is to convert the string to bytes using utf8ToBytes() and then hash it using sha256() and compare the map index and inputed hash using  toHex(). 

### findColor_in_colorWithSalt(hash):

This function retrieves the color with salt from a separate Map where colors are stored with additional random salt. It becomes difficult to match with origin keywords , and hence null value is returned even if the original keyword is inputed.... thanks to salting algorithm  :) .


### The demo of my output:
![myoutput](https://github.com/user-attachments/assets/2636759e-933b-49ee-b693-81776c21940c)

#### Additionally, I have addressed the following issues:

#### Case Sensitivity:
permits only exact matches.

#### Testing any unusual input:
return null for the inputs that weren't found in COLORS array.
#### Testing with salted array:
return null even if the original keyword is pushed as salting has changed the hash value.

Ooff... and the
### Challenges Faced:
Implemented  try and catch block wherever the assertions went wrong and it was a hard time availing time for my interest in blockchain against hectic schedule of the week xd...
Had a problem with javascript code, had to brush up things to surf along minute errors and assumptions i used to make. Commiting to main branch unknowingly and insanely took me some time to sort out the  problem.

### New topics learnt this week :

* why toHex() ?
When we convert a 256-bit hash to hexadecimal format, we are expressing the 256-bit value as a 64-character string, where each character represents 4 bits. This makes it easier to handle and read. Hexadecimal numbers are also more convenient for comparison, as they avoid potential issues that can arise from directly comparing binary values, such as differences in padding, byte alignment, or byte order.

* Hashing algorithm
*  nonce
*  mining
*  Importance of Salting keys to prevent vulnerable attacks
*  Bitcoin Mining
* Consensus Mechanisms like Proof of Work and Proof of Stake

### Thanks a Lot! 
