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
 * Complete the 'gridChallenge' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING_ARRAY grid as parameter.
 */

function gridChallenge(grid) {
  let newGrid = grid.map((el) =>
    el.toString().split("").sort().join().replaceAll(",", "")
  );

  let result = "YES";

  for (let iCol = 0; iCol <= newGrid.length - 1; iCol++) {
    for (let iRow = 0; iRow <= newGrid.length - 2; iRow++) {
      let a = newGrid[iRow].split("")[iCol];
      let b = newGrid[iRow + 1].split("")[iCol];

      if (b < a) {
        result = "NO";
      }
    }
  }

  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const t = parseInt(readLine().trim(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const n = parseInt(readLine().trim(), 10);

    let grid = [];

    for (let i = 0; i < n; i++) {
      const gridItem = readLine();
      grid.push(gridItem);
    }

    const result = gridChallenge(grid);

    ws.write(result + "\n");
  }

  ws.end();
}
