const person = {
  name: "Imran",
  age: 14,
  country: "Bangladesh",
};

function printPersonInfo({ name, age, country }) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Country: ${country}`);
}

printPersonInfo(person);

//nested destructuring
const songs = [
  { name: "Lucky you", singer: "joyner", duration: 4.34 },
  { name: "amr sonar", singer: "jolil", duration: 4.34 },
  { name: "pagluy you", singer: "jeet", duration: 4.34 },
  { name: "ok you", singer: "hamdur", duration: 4.34 },
  { name: "clean you", singer: "slamn", duration: 4.34 },
];

const [, , , { singer: nan }] = songs;
console.log(nan);
