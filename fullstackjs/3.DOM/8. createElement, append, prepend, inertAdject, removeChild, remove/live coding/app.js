// ------------------------------------
// createElement()
h1 = document.createElement("h1");
const body = document.body;
h1.textContent = "What is Good bye?";
h1.classList.add("greetings");
console.log(h1);
// appendChild()
body.appendChild(h1);

// insertBefore()
const ul = document.querySelector("ul");
const newLi = document.createElement("li");
newLi.innerText = "I'm li tag";
ul.appendChild(newLi);

const firstLi = document.querySelector("li");
//selector.insertBefore(what,where)
ul.insertBefore(newLi, firstLi);

// prepend()

/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */

const firstP = document.querySelector("p");
const i = document.createElement("i");
i.innerText = "I'm Italics";
i.style.color = "skyblue";
firstP.insertAdjacentElement("beforebegin", i);
firstP.insertAdjacentElement("afterbegin", i);
firstP.insertAdjacentElement("beforeend", i);
firstP.insertAdjacentElement("afterend", i);
// removeChild()
// remove()
// ------------------------------------
// append()
let section = document.querySelector("section");
// section.append(i);

const h4 = document.createElement("h4");
h4.innerText = "Imran";
h4.style.color = "crimson";
// section.append(i, h4);
section.prepend(h4, i);

//+++++++++++++++++++++++++
const newList = document.querySelector(".new-list");
const fourthChild = document.querySelector(".fourth");
newList.removeChild(fourthChild);

// newList.remove();//remove all
