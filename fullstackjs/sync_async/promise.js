const promiseObj = new Promise((resolve, reject) => {
  let req = true;
  req == true ? resolve("Request Success") : reject("Request Rejected");
})
  .then((value) => console.log(value))
  .catch((error) => console.log(error));

//example

function checkNumber(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      resolve(`${number} is an even number!~`);
    } else {
      reject(`${number} is an odd number~.`);
    }
  });
}

const numberToCheck = 8; //odd
checkNumber(numberToCheck)
  .then((res) => console.log("success,", res))
  .catch((err) => console.log("fail~,", err));
