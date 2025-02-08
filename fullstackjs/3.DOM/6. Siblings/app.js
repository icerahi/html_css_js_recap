let firstLi = document.querySelector("li");
// console.log(firstLi.parentElement);
// console.log(firstLi.parentElement.parentElement);
// console.log(firstLi.parentElement.parentElement.parentElement);
// console.log(firstLi.parentElement.parentElement.parentElement.parentElement);

let ul = document.querySelector("ul");
// console.log(ul.children[0]);
// console.log(ul.children[1]);
// console.log(ul.children[2]);
// console.log(ul.children[3]);
// console.log(ul.children[4]);
console.log((ul.children[0].innerText = "Imran"));

console.log(firstLi.nextElementSibling.textContent);
console.log(firstLi.nextElementSibling.nextElementSibling.textContent);
console.log(
  firstLi.nextElementSibling.nextElementSibling.nextElementSibling.textContent
);

console.log("previous element sibling_____");
let fourthLi = document.querySelector(".fourth");
fourthLi.sibli;
console.log(fourthLi.previousElementSibling.textContent);
console.log(fourthLi.previousElementSibling.previousElementSibling.textContent);
