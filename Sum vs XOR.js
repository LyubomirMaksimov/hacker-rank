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

function sumXOR(n) {
  let countZeros = 0;
  while (n > 0) {
    if (n % 2 === 0) {
      countZeros++;
    }
    n = Math.floor(n / 2);
  }

  let result = Math.pow(2, countZeros);
  console.log(result);
  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const result = sumXOR(n);

  ws.write(result + "\n");

  ws.end();
}
