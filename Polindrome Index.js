"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'palindromeIndex' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function palindromeIndex(s) {
  function isPalindrome(s, left, right) {
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }

  if (isPalindrome(s, 0, s.length - 1)) {
    return -1;
  }

  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      // Try removing character at index 'left'
      if (isPalindrome(s, left + 1, right)) {
        return left;
      }
      // If not palindrome, try removing character at index 'right'
      if (isPalindrome(s, left, right - 1)) {
        return right;
      }
      // If neither works, it's not possible to make a palindrome by removing one character
      return -1;
    }
    left++;
    right--;
  }

  // This should not be reached for valid input
  return -1;
}
function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine().trim(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const s = readLine();

    const result = palindromeIndex(s);

    ws.write(result + "\n");
  }

  ws.end();
}
