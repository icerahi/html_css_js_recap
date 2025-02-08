let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let double = numbers.map((num) => num * 2);
console.log(double);

//example
let peoples = [
  { firstName: "Macon", lastName: "nedela" },
  { firstName: "Mace", lastName: "neddfdela" },
  { firstName: "Macerfefon", lastName: "nedfddela" },
  { firstName: "Madfdcon", lastName: "neddfdela" },
];

const result = peoples.map((item) => [item.firstName, item.lastName]);
console.log(result);

console.log("Challangess_______");

const random_number = [3, 4, 5, 6, 4332, 5, 3, 2];
const res = random_number.map((item) => item * 10);
console.log(res);

//map will create a new array by iterating/modifying current array
