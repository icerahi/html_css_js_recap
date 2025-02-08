function greet() {
  return `Hello, my name is ${person.name} & I am ${person.age} years old!`;
}

const person = {
  name: "Imran",
  age: 19,
  greet,
  test: function () {
    return `I'm test, my name ${person.name},age:${person.age}`;
  },
};
console.log(person.greet());
console.log(person.test());
