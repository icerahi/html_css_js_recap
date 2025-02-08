function greet(name = "Rahi") {
  console.log("Welcome to my home");
  console.log(`Thanks for joining, ${name}`);
}
greet("Imran");
greet();

function add(x, y) {
  return x + y;
}
console.log(add(10, 20));

//challanges

function myFunction(a, b) {
  return a * b;
}
console.log(myFunction(2, 4));

//annonymus function
const greeting = function (user) {
  console.log(`hello ${user}`);
};
greeting("VIKO");

//callback function

function call(name, cb) {
  console.log("Welcome man!", name);
  cb(name);
}
function cb(name) {
  console.log(`muri kha,halar pot -${name}`);
}
call("Imran", cb);

//challanges
console.log("CHallanges");
function showCallFunc(fn) {
  let value = 10;
  fn(10);
}
function fn(value) {
  console.log(value);
}
showCallFunc(fn);
//or
showCallFunc(function (value) {
  console.log(value);
});
