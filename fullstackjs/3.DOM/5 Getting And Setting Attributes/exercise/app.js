// 1. Select the anchor tag
const a = document.querySelector("a");
console.log(a);
// 2. Use getAttribute(attrName) to check the attribute.
console.log(a.getAttribute("href"));
// 3. Select a-two & set "href" attribute
const a_two = document.querySelector(".a-two");

a_two.setAttribute("href", "https://udemy.com");
// setAttribute(attrName, value)
console.log(a_two);
