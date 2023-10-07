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
 * Complete the 'twoArrays' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 *  3. INTEGER_ARRAY B
 */

function twoArrays(k, A, B) {
  // Write your code here

  const sortedA = A.sort((a, b) => a - b);
  const sortedB = B.sort((a, b) => a - b);

  const AAA = new Array(A.length).fill(0);
  const BBB = new Array(B.length).fill(0);

  // 1, 1, 2, 2
  // 3, 3, 3, 4

  for (let a = 0; a < sortedA.length; a++) {
    console.log(a);
    if (AAA[a] != 1) {
      for (let b = 0; b < sortedB.length; b++) {
        if (BBB[b] != 1) {
          if (sortedA[a] + sortedB[b] >= k) {
            console.log(`A:${a} : B:${b}`);
            AAA[a] = 1;
            BBB[b] = 1;
            break;

            console.log("Used:", AAA);
            console.log("Used:", BBB);
          }
        }
      }
    }
  }

  return AAA.some((el) => el == 0) ? "NO" : "YES";
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine().trim(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const A = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((ATemp) => parseInt(ATemp, 10));

    const B = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((BTemp) => parseInt(BTemp, 10));

    const result = twoArrays(k, A, B);

    ws.write(result + "\n");
  }

  ws.end();
}
