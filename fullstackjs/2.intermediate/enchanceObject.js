function user(name, age, work) {
  return {
    name,
    age,
    work,
    intro: () => `My name is ${name}, I'm ${age} years old and I'm a ${work}`,
  };
}

const imran = user("Imran", 19, "programmer");

console.log(imran.intro());

//challanges
let a = 1;
let b = 2;
let c = 3;
let obj = { a, b, c };
console.log(obj);

//second challanges

let lib = {
  sum: (a, b) => a + b,
  mult: (a, b) => a * b,
};

console.log(lib.sum(3, 3));

console.log(lib.mult(3, 3));
