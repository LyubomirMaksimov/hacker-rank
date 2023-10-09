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

function superDigit(n, k) {
  // Calculate the digital root of a number
  function digitalRoot(number) {
    return ((number - 1) % 9) + 1;
  }

  // Calculate the digital root of the initial number
  let initialDigitalRoot = digitalRoot(
    n.split("").reduce((sum, digit) => sum + +digit, 0)
  );

  // Calculate the digital root of the final number
  let finalDigitalRoot = digitalRoot(initialDigitalRoot * k);

  return finalDigitalRoot;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

  const n = firstMultipleInput[0];

  const k = parseInt(firstMultipleInput[1], 10);

  const result = superDigit(n, k);

  ws.write(result + "\n");

  ws.end();
}
