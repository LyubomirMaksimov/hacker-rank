"use strict";

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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  // Write your code here
  const sortedArray = arr.sort((a, b) => a - b);
  //   console.log(sortedArray);

  const minValue = sortedArray.slice(0, 4).reduce((a, b) => a + b, 0);
  const maxValue = sortedArray.slice(1, 5).reduce((a, b) => a + b, 0);

  console.log(minValue, maxValue);
  //   console.log(maxValue);
}

function main() {
  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
