// createElement()
const body = document.body;
const h1 = document.createElement("h1");
const ul = document.createElement("ul");

h1.innerText = "Hello guys, welcome back to me!";
h1.style.color = "gray";
// body.appendChild(h1);

for (let i = 0; i <= 4; i++) {
  const li = document.createElement("li");
  li.innerText = `${i} list`;
  ul.appendChild(li);
}

const s_li = document.createElement("li");
s_li.innerText = "MD Imran Hasan";
s_li.style.color = "crimson";

// append()
body.append(h1, ul);
// prepend()
ul.prepend(s_li);

const span = document.createElement("span");
span.textContent = "Cool bro!!!";
span.style.color = "violet";

/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */

ul.insertAdjacentElement("beforeend", span);
// removeChild()
ul.removeChild(span);
// remove()
// ul.remove();
ul.insertBefore(span, s_li); //insertBefore(what,where)
