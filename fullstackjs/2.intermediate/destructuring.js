const foo = ["one", "two", "three"];
const [one, ...two] = foo;
console.log(one);
console.log(two);

function f() {
  return [1, 2];
}
let a, b;
[a, b] = f();
console.log(a);
console.log(b);

function fn() {
  return [1, 2, 3];
}
const [x, , z] = fn();
console.log(x, z);

//challanges
console.log("challanges-----");
const colors = ["red", "green", "blue", "yellow", "orange"];

let [color1, color2, color3] = colors;
console.log(color1, color2, color3);
// object distructuring

const student = { name: "Imran", position: "first", rollNo: 27 };
const { name, position, rollNo } = student;
console.log(name);
console.log(position);
console.log(rollNo);

//challangess

const person = {
  name: "JOkhn dioe",
  age: 30,
  gender: "male",
  country: "USA",
};
const { name: name_duplicate, age, country } = person;
console.log(name_duplicate, age, country);

//object distructuring and rest operator
let { a: m, b: n, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 };
console.log(m, n);
console.log(rest);

//challanges
console.log("______challanges____");
const { name: personName, age: personAge, country: personCountry } = person;
console.log(personName, personAge, personCountry);
