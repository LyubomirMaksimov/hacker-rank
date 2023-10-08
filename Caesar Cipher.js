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
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
  let result = "";
  s.split("").forEach((l) => {
    if (/[a-zA-Z]/.test(l)) {
      if (l == l.toUpperCase()) {
        let ascNum = l.charCodeAt(0) + k;
        while (ascNum > 90) {
          ascNum = ascNum - 26;
        }
        result += String.fromCharCode(ascNum);
      } else if (l == l.toLowerCase()) {
        let ascNum = l.charCodeAt(0) + k;
        while (ascNum > 122) {
          ascNum = ascNum - 26;
        }
        result += String.fromCharCode(ascNum);
      }
    } else result += l;
  });

  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const s = readLine();

  const k = parseInt(readLine().trim(), 10);

  const result = caesarCipher(s, k);

  ws.write(result + "\n");

  ws.end();
}
