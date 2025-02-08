let person = {
  name: "Imrna",
  age: 15,
};

const jsonString = JSON.stringify(person);
console.log(jsonString);
const parseObject = JSON.parse(jsonString);
console.log(parseObject);
