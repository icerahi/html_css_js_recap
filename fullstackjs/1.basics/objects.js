//Object

const person = {
  firstName: "imran",
  lastName: "hasan",
  age: 19,
  location: ["Planet", "Earth"],
  isProgrammer: true,
};
person.country = "Bangladesh";

const arr = [];
console.log(typeof arr);
console.log(typeof person);
console.log(person.age);
console.log(person["firstName"]);
console.log(person.country);

delete person.location;
console.log(person);
person["location"] = "Dhaka";
console.log(person);

//challanges
console.log("CHallenges starting");

const car = {
  type: "sports",
  model: "AB",
  color: "Black",
};
console.log(typeof car);
car["type"] = "Toyota";
car.wheels = 4;
console.log(car);
