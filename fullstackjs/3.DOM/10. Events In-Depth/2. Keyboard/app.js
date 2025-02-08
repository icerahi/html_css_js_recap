// https://www.w3schools.com/jsref/obj_keyboardevent.asp
const input = document.querySelector("input");

// input.addEventListener("keypress", (event) => {
//   console.log("keypressed");
// });

// input.addEventListener("keyup", (event) => {
//   console.log("keyup");
// });

// input.addEventListener("keydown", (event) => {
//   console.log("keydown");
// });

// input.addEventListener("input", (e) => {
//   console.log("input");
//   console.log(e.target.value);
// });

//Use full properties and method

input.addEventListener("keypress", (e) => {
  //   console.log(e.charCode);
  //   console.log(e.code);
  //   console.log(e.ctrlKey);
  console.log(e.key);
  console.log(e.shiftKey);
});
