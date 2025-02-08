const map = new Map();

const keyOne = "string";
const keyTwo = {};
const keyThree = function () {};

map.set(keyOne, "Value of key one");
map.set(keyTwo, "Value of key two");
map.set(keyThree, "Value of key Three");

console.log(map);
console.log(map.keys());
console.log(map.values());
console.log(map.delete(keyThree));
console.log(map);
console.log(map.size);

for (let [key, value] of map) {
  console.log(`${key} -- ${value}`);
}
for (let key of map.keys()) {
  console.log(key);
}

for (let value of map.values()) {
  console.log(value);
}

//challanges

const demoMap = new Map();

demoMap.set("a", 1);
demoMap.set("b", 2);
demoMap.set("c", 3);
console.log("a=>", demoMap.get("a"));
demoMap.delete("a");
console.log(demoMap.size);
