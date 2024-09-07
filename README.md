# Week-1: Hands on Assignment

### Brute Force Hashing

Cryptographic Hash Functions like SHA256 are one-way functions. This means that if you have the input, it's relatively trivial to find the output. On the other hand, if you have the output, it is infeasible to find the input.

However, if you knew the hashes of some common inputs, then you could brute-force guess at the output or create a [Rainbow Table](RainbowTable.md) to determine what that input is.

It's easy to find that the SHA256 hash of "apples" is `0xf5903f...0f74d9`. If this was a likely input, a hacker could search for it specifically and know that the input was "apples"! 😱

> ⚠️ For security purposes, it's important to remember to use a random salt which you can add to your input to make it unguessable via the methods mentioned above!

### 🏁 Your Goal: Find the Color
Given a SHA256 hash, find the color input that would generate that hash. You can assume that all the hashes be generated only from colors provided in the `COLORS` array.

1. To take the hash of a color, first use `utf8ToBytes` to translate the string to bytes. Then, use `sha256` to hash it.
2. When you want to compare two hashes, first use toHex to turn each hash from a [Uint8Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) to a string of hexadecimal characters.

So comparing two hashes would look like this:

```js
const a = "apple";
const b = "banana";

const aBytes = utf8ToBytes(a);
const bBytes = utf8ToBytes(b);

const aHash = sha256(aBytes);
const bHash = sha256(bBytes);

console.log(toHex(aHash) === toHex(aHash)); // true
console.log(toHex(aHash) === toHex(bHash)); // false
```

> 📖 Wondering what utf8 stands for? The UTF-8 standard translates all the possible keyboard characters you can think of into bytes. This is an agreed upon standard to ensure we all get the same bit values representing the letters and words we see on the screen. Learn more about [utf8](https://en.wikipedia.org/wiki/UTF-8) here.

## Project Setup and Instructions

1. Fork this repository to your GitHub account.

2. Clone your forked repository to your local machine:
   ```
   git clone https://github.com/nitk-surathkal-unidao/week-1.git
   cd week-1
   ```

3. Create a new branch for your implementation:
   ```
   git checkout -b <your_name>_solution_week1
   ```

4. Install the required dependencies:
   ```
   npm install
   ```

5. Open the `index.js` file and implement the `findColor` function. This is where you'll write your solution.

6. To run the tests:
   ```
   npm test
   ```

7. Keep modifying your implementation until all tests pass.

   ![Screenshot 2024-09-07 at 23 02 49](https://github.com/user-attachments/assets/a9fb4f3c-f573-4a1c-825e-ab46508e09bd)


## Submitting Your Solution

1. After implementing your solution and ensuring all tests pass, commit your changes:
   ```
   git add .
   git commit -m "Implement findColor function"
   ```

2. Push your branch to your forked repository:
   ```
   git push origin <your_name>_solution_week1
   ```

3. Go to your forked repository on GitHub and create a new pull request from your `<your_name>_solution_week1` branch to the original repository's main branch.

4. In the pull request description, briefly explain your approach and any challenges you faced.

## Implementation Hints

1. Use the `utf8ToBytes` function to convert each color string to bytes.
2. Use the `sha256` function to hash the bytes.
3. Use the `toHex` function to convert the hash to a hexadecimal string for comparison.
4. Iterate through the `COLORS` array, hash each color, and compare it with the given hash.
5. Return the matching color when found.

## Additional Resources

- [Git Branching - Basic Branching and Merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)
- [Creating a pull request from a fork](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork)
- [JavaScript Array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

Good luck!
