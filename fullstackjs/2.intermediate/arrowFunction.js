// greet = (username, email) => {
//   return `hello ${username}-${email}`;
// };

greet = (username, email) => `Hello ${username}-${email}`;
console.log(greet("Imran", "zanjarwhite@gmail.com"));

let double = (number) => number * 2;
console.log(double(5));

//challanges\\

setTimeout(() => {
  console.log("Hwllo");
  setTimeout(() => {
    console.log("Hey");
    setTimeout(() => {
      console.log("Namaste");
      setTimeout(() => {
        console.log("HI");
        setTimeout(() => console.log("Bonjour"), 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);
