const btns = document.querySelectorAll(".btn");
const body = document.body;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    changeBg(btn.value);
  });
});

function changeBg(color) {
  body.className = color;
}
