const numbers = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9];

const sum = numbers.reduce((p, c) => p + c, 0);
console.log(sum);
const texts = ["one", "two", "three", "four", "five"];

const textSum = texts.reduce((p, c) => p + c + "_", 0);
console.log(textSum);

///

const peoples = [
  { name: "Imran", age: 25 },
  { name: "Im", age: 19 },

  { name: "Imrn", age: 19 },
  { name: "mran", age: 18 },
  { name: "Iman", age: 15 },
];

const oldestPeople = peoples.reduce((p, c) => (c.age > p ? c.age : p), 0);

console.log(oldestPeople);
//example
const words = [
  "apple",
  "banana",
  "orange",
  "apple",
  "orange",
  "apple",
  "grape",
];

const wordFrequency = words.reduce((frequencyMap, word) => {
  frequencyMap[word] = frequencyMap[word] || 0 + 1;
  return frequencyMap;
}, {});
console.log(wordFrequency);

console.log("Challanges______");

let calculateProduct = (arr) => {
  const product = arr.reduce((prev, current) => prev * current, 1);
  return product;
};
const nums = [2, 3, 4, 5, 6];

console.log(calculateProduct(nums));
