const colors = ["teals", "red", "green", "pink"];

colors.forEach((items) => console.log(items + 2));

const words = ["hello", "birds", "lugano", "zurich"];

words.forEach((value, index, arr) => {
  console.log(value, index, arr);
  arr[index] = value[0].toUpperCase() + value.substring(1);
});

console.log(words);

//challanges

console.log("________challanages__________");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
// function adder(num) {
//   return (sum += num);
// }
// numbers.forEach(adder);
numbers.forEach((num) => (sum += num));
console.log(sum);
