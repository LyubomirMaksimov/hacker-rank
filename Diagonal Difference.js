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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
  // Write your code here

  console.log(arr);

  let sum1 = 0;
  let sum2 = 0;
  const arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    console.log(arr[i][i]);
    sum1 += arr[i][i];
  }

  for (let i = arrLength - 1; i >= 0; i--) {
    console.log(arr[arrLength - 1 - i][i]);
    sum2 += arr[arrLength - 1 - i][i];
  }

  console.log("sum1:", sum1);
  console.log("sum2:", sum2);

  let result = Math.abs(sum1 - sum2);
  console.log("result:", result);

  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  let arr = Array(n);

  for (let i = 0; i < n; i++) {
    arr[i] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((arrTemp) => parseInt(arrTemp, 10));
  }

  const result = diagonalDifference(arr);

  ws.write(result + "\n");

  ws.end();
}
