//arrays=> 0 index based \

let fruits = ["orange", "banana", "apple"];

console.log(fruits);
console.log(fruits[0]);

let stringArr = ["eat", "code", "sleep", "repeat"];

//accessing items from array
stringArr.push("imran");
console.log(stringArr);

//nested array
const nestedArr = ["one", ["two", "three"], "four"];
console.table(nestedArr[1][1]);

//challenges
console.log("Challanges");
let favSinger = ["atif aslam", "k k", "Habib Wahid"];
console.log(favSinger[0]);
let favSingers = ["string", ["otherarray"], 123, true];
console.log(favSingers[0]);
console.log(favSingers[1][0]);
console.log(favSingers[2]);
console.log(favSingers[3]);
console.log("------new------");

console.log(favSinger.concat(favSingers));
console.clear();
let language = ["JS", "Python", "c#", "swift"];
console.log(language.includes("Python"));
language.push("imran");
console.log(language);
language.unshift("first");
console.log(language);
language.shift();
console.log(language);
language.pop();
console.log(language);
console.log(language.join("+"));
console.log(language.reverse().join("-"));
console.log(language.slice(0, 3), "slice");
let numbers = [2, 5, 1, 3];
console.log(numbers.sort());
console.log(language.splice(""));
