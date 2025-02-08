let person = {
  name: "Imran",
  age: 19,
  gender: "male",
};
for (let key in person) {
  console.log(key, "-", person[key]);
}

let list = ["one", "two", "three", "four"];

for (let index in list) {
  console.log(index, "-", list[index]);
}
// challanges\\
console.log("_______-challanges_______");
const object = { a: 1, b: 2, c: 3 };
for (let keys in object) {
  console.log(keys, "-", object[keys]);
}
