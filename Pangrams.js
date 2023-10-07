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
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
  // Write your code here

  let str = s.toLowerCase();
  let arr = new Array(26).fill(0);

  for (let i = 0; i < str.length; i++) {
    let a = str.charCodeAt(i) - 97;
    a >= 0 ? arr[a]++ : null;
  }

  console.log(arr);
  return arr.some((el) => el == 0) ? "not pangram" : "pangram";
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = pangrams(s);

  ws.write(result + "\n");

  ws.end();
}
