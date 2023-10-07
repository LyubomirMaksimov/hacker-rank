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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  // Write your code here

  const zeroPad = (num, places) => {
    return String(num).padStart(places, "0");
  };

  let hours = Number(s.slice(0, 2));
  let mins = Number(s.slice(3, 5));
  let secs = Number(s.slice(6, 8));
  let pmam = s.slice(8);

  console.log(hours);

  if (pmam === "PM") {
    if (hours != 12) {
      hours += 12;
    }

    if (hours >= 24) {
      hours -= 24;
    }
  } else {
    if (hours >= 12) {
      hours -= 12;
    }
  }

  console.log(`${zeroPad(hours, 2)}:${zeroPad(mins, 2)}:${zeroPad(secs, 2)}`);

  return `${zeroPad(hours, 2)}:${zeroPad(mins, 2)}:${zeroPad(secs, 2)}`;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = timeConversion(s);

  ws.write(result + "\n");

  ws.end();
}
