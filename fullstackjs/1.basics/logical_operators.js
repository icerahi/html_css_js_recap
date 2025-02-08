//1. logical AND(&&)
//=> TRUE if both the operands/boolean values are true, else evalutes to false

//2.logical OR(||)
//3.logical NOT(!)

console.log(true || false);
console.log(true && false);
let a = false;

console.log(!a);

let password = "imranhasan.";

if (password.length >= 8 && password.includes("dev")) {
  console.log("Valid Password!");
} else {
  console.log("Invalid Password!");
}
