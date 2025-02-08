const peoples = [
  { name: "imran", age: 17 },
  { name: "iman", age: 119 },
  { name: "ian", age: 18 },
  { name: "imrn", age: 17 },
  { name: "imn", age: 16 },
];

const res = peoples.find((person) => person.age === 17);
// console.log(res);
//it will return the first matched item

const posts = [
  { id: 1, content: "good post" },
  { id: 2, content: "Funny post" },
  { id: 3, content: "Sad post" },
  { id: 4, content: "Horny post" },
  { id: 5, content: "BAD post" },
];

const postRes = posts.find((post) =>
  post.content.toLowerCase().includes("bad")
);
console.log(postRes);

console.log("____Challanges_____");
const ages = [3, 10, 18, 20];
console.log(ages.find((age) => age > 18));

console.log("_____another challanges___");

let products = [
  { name: "Checkers", category: "Toys" },
  { name: "Harry Potter", category: "Books" },
  { name: "Iphone", category: "Electronics" },
  { name: "Learn PHP", category: "Books" },
];
// let product;
// for (let p of products) {
//   if (p.category === "Books") {
//     product.push(p);
//   }
// }
// products.filter((p) => (p.category === "Books" ? (product = p) : ""));
let product = products.find((p) => p.category === "Books");
console.log(product);
