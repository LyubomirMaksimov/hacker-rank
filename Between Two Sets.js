function getTotalX(a, b) {
  function findDivisors(min, max, number) {
    let divitsors = [];
    for (let i = 1; i <= number; i++) {
      if (number % i === 0 && min <= i && i <= max) {
        divitsors.push(i);
      }
    }
    return divitsors;
  }

  a.sort((a, b) => a - b);
  b.sort((a, b) => a - b);

  let lowest = a[a.length - 1];
  let highest = b[0];

  let arr = findDivisors(lowest, highest, b[0]);

  let finalNumbers = [];

  arr.forEach((num) => {
    let isOK = true;
    a.forEach((element) => {
      if (num % element !== 0) {
        isOK = false;
      }
    });

    if (isOK) {
      finalNumbers.push(num);
    }
  });

  return finalNumbers.length;
}

const a = [2];
const b = [20, 30, 12];
const result = getTotalX(a, b);
console.log("Number of integers satisfying the conditions:", result); // Output: 3
