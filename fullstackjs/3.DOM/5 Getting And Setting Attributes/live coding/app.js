// href
// value
// type
// getAttribute(attrName)
// setAttribute(attrName, value)

const a = document.querySelector("a");
a.innerText = "Youtube";

a.setAttribute("target", "_blank");
console.log((a.href = "www.youtube.com"));

//getting attributes
const input = document.querySelector("input");
console.log(input.value);
console.log(input.type);

//setting attributes
a.href = "https://www.youtube.com";
// input.value = "Bye";
input.type = "email";
input.placeholder = "Please provide a strong password";

//getAttribute(attrName)
console.log(input.getAttribute("type"));
console.log(input.getAttribute("placeholder"));

//setAttribute(attrName,value)
console.log(input.setAttribute("placeholder", "Password"));
console.log(input.setAttribute("type", "password"));
