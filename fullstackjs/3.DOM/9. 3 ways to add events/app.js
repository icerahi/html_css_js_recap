// ----------- BAD WAY-----------
// const secondBtn = document.querySelector(".second-btn");
// secondBtn.onclick = function () {
//   console.log("Imran,webdev");
// };
// ----------- GREAT WAY-----------
const best = document.querySelector(".best");
best.addEventListener("click", () => console.log("best way"));
// ----------- Event (e) Object -----------
const para = document.querySelector(".para");
para.addEventListener("click", (event) => {
  console.log("event type:", event.type);
  console.log("event target:", event.target);
  console.log("event target ID", event.target.id);
  console.log("event currentTarget ID", event.currentTarget.id);
  console.log("event bubble:", event.bubbles);
  console.log("Client X mouse:", event.clientX);
  console.log("timestamp:", event.timeStamp);
  console.log("Event key:", event.key);
  console.log("Prevent Defualt:", event.preventDefault);
});
const input = document.querySelector("input");
input.addEventListener("input", (event) => {
  console.log(event.target.value);
});
