//setInterval

setInterval(
  () => console.log("This function will execute every to seconds"),
  2000
);

//setTimeout

setTimeout(function () {
  console.log("This function will be executed after 3 second");
}, 3000);

const intervalID = setInterval(function () {
  console.log("this function is being executed every 1 sec");
}, 1000);

// console.log(intervalID);
//stop the interval after 10 seconds

setTimeout(function () {
  clearInterval(intervalID);
  console.log("Interval Stopped! after 5 second");
}, 5000);
