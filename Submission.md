# Week-1 Assignment

## In this update, I have used two key functions for color hashing and retrieval:

### findColor(hash):

This function retrieves the color corresponding to a given hash from the pre-defined color set in the index.js . It uses a Map datastructure to store the mappings of hash - color and returns the color if found, or null if the hash does not match any color.

### findColor_in_colorWithSalt(hash):

This function retrieves the color with salt from a separate Map where colors are stored with additional random salt. It returns the color and salt if found, or null otherwise.

![myoutput](https://github.com/user-attachments/assets/2636759e-933b-49ee-b693-81776c21940c)

<br>

### Issues Solved
Additionally, I have addressed the following issues:

Case Sensitivity:
permits only exact matches.

Testing any unusual input
return null for the inputs that weren't found in COLORS array.

Ooff... and the 
### Challenges Faced:
Implemented  try and catch block wherever the assertions went wrong and it was a hard time - availing some time for my interest in blockchain against hectic schedule of the week xd...

New topics learnt:
Hashing algorithm, Importance of Salting keys to prevent vulnerable attacks, Bitcoin Mining, Proof of Work and Proof of Stake. 


