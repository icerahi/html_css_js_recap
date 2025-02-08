const btn = document.querySelector(".btn");

btn.addEventListener("click", makeRequest);
function makeRequest() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      if (!res.ok) new Error(res.statusText);
      return res.json();
    })
    .then((data) => {
      let output = document.querySelector(".all-posts");

      data.forEach((element) => {
        output.innerHTML += ` <strong>${element.id}</strong>
                            <h1>${element.title}</h1>
                             <p>${element.body}</p>`;
      });
    })
    .catch((err) => console.log(err));
}
