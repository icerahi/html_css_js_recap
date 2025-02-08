//for (variable of iterable){...}

let peoples = ["imran", "salman", "hasan", "rahi"];

for (let people in peoples) {
  console.log(peoples);
}
for (let people of peoples) {
  console.log(people);
}

const text = "HELLO";

for (const char of text) {
  console.log(char);
}

const array1 = ["a", "b", "c"];
for (const element of array1) {
  console.log(element);
}
