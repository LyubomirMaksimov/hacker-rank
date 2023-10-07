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
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
  // Write your code here

  a.sort((a, b) => a - b);

  let result;

  console.log(a);

  for (let i = 0; i < a.length; i++) {
    let n = a[i];
    console.log(n);

    if (n != a[i - 1] && n != a[i + 1]) {
      result = n;
      break;
    }

    // if (a.length > 0) {
    //     if (i = 0) {
    //         console.log('case: 1')
    //         if (a[i+1] != undefined){
    //             if (a[i] != a[i+1]) {
    //                 result = n;
    //                 break;
    //             }
    //         }
    //     } else if (i = a.length -1 && i > 0) {
    //          console.log('case: 2')
    //         if (a[i-1] != undefined){
    //             if (a[i] != a[i+1]) {
    //                 result = n;
    //                 break;
    //             }
    //         }
    //     } else {
    //          console.log('case: 3')
    //         if(n != a[i-1] && n != a[i+1]){
    //             result = n;
    //             break;
    //         }
    //     }
    // } else {
    //     return a[i];
    // }
  }

  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const a = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((aTemp) => parseInt(aTemp, 10));

  const result = lonelyinteger(a);

  ws.write(result + "\n");

  ws.end();
}
