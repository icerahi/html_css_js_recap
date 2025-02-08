//getting elements from the DOM

const rating = document.querySelectorAll(".rating");
const ratingContainer = document.querySelector(".rating-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");

let selectRating = "Satisfied";

//attach events
ratingContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    // console.log(e.target.parentNode.classList.contains("rating"));
    removeActive();
    e.target.parentNode.classList.add("active");
    selectRating = e.target.nextElementSibling.innerText;
    console.log(selectRating);
  }
});

sendBtn.addEventListener("click", () => {
  panel.innerHTML = `
    <p class="heart">❤️ </p>
    <strong>Thank You! </strong>
    <br>
    <strong>Feedback: ${selectRating} </strong>
    `;
});

function removeActive() {
  for (let i = 0; i < rating.length; i++) {
    rating[i].classList.remove("active");
  }
}
