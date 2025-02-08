//function, array, object

function giveMe4(a, b, c, d) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("d", d);
}
const colors = ["red", "green", "blue", "teal"];

giveMe4(...colors);

//array

const strNums = ["one", "two", "three"];

const moreStrNums = ["hour", "give", "six"];

const concat = [...strNums, ...moreStrNums];
console.log(concat);

//object shallow copies

const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3 };
const obj3 = { ...obj1, ...obj2, z: 4 };

console.log(obj3);

//rest operator

function user(name, ...userData) {
  console.log(name);
  console.log(userData);
}
user("Imran", 19, "programming", "football");

function person(firstName, last_name, ...hobbies) {
  console.log(firstName);
  console.log(last_name);
  console.log(hobbies);
}
person("Imran", "Hasan", "football", "programming", "isngger", "dancing");

//challanges
function test(...value) {
  console.log(value);
}
test("amar", "sonar", "bangla", "ami", "tomay", "valobashi");
