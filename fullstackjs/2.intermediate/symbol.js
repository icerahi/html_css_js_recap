const mySymbol = Symbol("My custom symbol");
console.log(mySymbol);

//comparing sysmbols
const mySymbol1 = Symbol("name");
const mySymbol2 = Symbol("name");

console.log(mySymbol1 === mySymbol2);

const obj = {};
obj[mySymbol1] = "value 1";
obj[mySymbol2] = "value 2";
console.log(obj);

const symbol1 = Symbol("name");
const symbol2 = Symbol("name");
const imran = {};
imran.age = 19;
imran["gender"] = "male";
imran["gender"] = "female";
imran[symbol1] = "alex";
imran[symbol2] = "john";
console.log(imran);

//challanges
console.log("---------challanges-------");
const testSysmbol = Symbol("foo");
console.log(typeof testSysmbol);

const emptyObj = { firstName: "Rahi", lastName: "Hasan" };
emptyObj[testSysmbol] = "Test simple";
console.log(emptyObj);

console.log("Iterataing");
for (let i in emptyObj) {
  console.log(i);
}

console.log(emptyObj[testSysmbol]);
