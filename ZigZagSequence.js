function processData(input) {
  let arr = input.replace(/\s/g, ",").split(",");
  arr = arr.slice(2, arr.length);
  const rightpart = arr.splice(Math.floor(arr.length / 2)).reverse();
  arr
    .concat(rightpart)
    .map((el) => Number(el))
    .join(" ");
  console.log(arr.concat(rightpart).join(" "));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
