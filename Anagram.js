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

function anagram(s) {
  let left = s.slice(0, s.length / 2);
  let right = s.slice(s.length / 2, s.length);

  if (left.length !== right.length) {
    return -1;
  }

  function makeAnagram(str1, str2) {
    const freqMap1 = getFrequencyMap(str1);
    const freqMap2 = getFrequencyMap(str2);

    let replacements = 0;

    for (const char in freqMap1) {
      if (!(char in freqMap2)) {
        // If the character from str1 is not present in str2, it needs to be replaced
        replacements += freqMap1[char];
      } else {
        // If the character is present in both strings, calculate the difference in frequencies
        replacements += Math.max(0, freqMap1[char] - freqMap2[char]);
      }
    }

    return replacements;
  }

  function getFrequencyMap(str) {
    const freqMap = {};
    for (const char of str) {
      freqMap[char] = (freqMap[char] || 0) + 1;
    }
    return freqMap;
  }

  let replacementsCount = makeAnagram(left, right);
  return replacementsCount;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine().trim(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const s = readLine();

    const result = anagram(s);

    ws.write(result + "\n");
  }

  ws.end();
}
