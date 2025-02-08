//new promise
//async / await

//text method returns promise
//if resolved will return next representation body
// fetch("text.txt")
//   .then((res) => res.text())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
const result = document.querySelector(".result");

// fetch("textdd.txt")
//   .then((res) => {
//     if (!res.ok) throw Error(res.statusText);
//     return res.text();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// fetch("text.txt")
//   .then((res) => {
//     if (!res.ok) throw Error(res.statusText);
//     return res.text();
//   })
//   .then((data) => (result.textContent = data))
//   .catch((err) => console.log(err));

// async function getData() {
//   try {
//     const res = await fetch("text.txt");
//     if (!res.ok) throw Error(res.statusText);
//     const data = await res.text();
//     result.textContent = data;
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getData();

// async function renderData() {
//   try {
//     const res = await fetch("data.json");
//     if (!res.ok) throw Error(res.statusText);
//     const data = await res.json();
//     console.log(data);
//     result.textContent = JSON.stringify(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// renderData();

const renderData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await res.json();
    result.textContent = JSON.stringify(data);
  } catch (err) {
    console.log(err);
  }
};
renderData();
