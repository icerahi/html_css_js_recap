//only unique value store
const initialValues = [1, 2, 2, 2, 2, 2, 3, "rahi", "rahi"];

const mySet = new Set(initialValues);
mySet.add("apple");
mySet.add("apple");
mySet.add("banana");
mySet.add("banana");
mySet.delete("apple");
console.log(mySet.has("apple"));
// mySet.clear();

mySet.forEach((item) => console.log(item));
// for (let item of mySet) {
//   console.log(item);
// }

//challanges

const letters = new Set();
letters.add("a");
letters.add("b");
letters.add("c");
// console.log(letters.has("a"));
letters.forEach((item) => console.log(item));

console.log("________");

for (let item of letters) {
  console.log(item);
}
