const peoples = ["imran", "hasan", "rubix", "cube"];

const res1 = peoples.some((people) => people.length > 4);
const res2 = peoples.every((people) => people.length > 4);
console.log(res1);
console.log(res2);

const songs = [
  { name: "Lucky you", duration: 4.3 },
  { name: "Just like you", duration: 3.23 },
  { name: "The Search", duration: 2.3 },
  { name: "Old Town Road", duration: 1.43 },
  { name: "The Box", duration: 5.23 },
];
const everyRes = songs.every((song) => song.duration > 4);
const someRes = songs.some((song) => song.duration > 3);
console.log(everyRes);
console.log(someRes);

console.log("______Challanages_______");

let products = [
  { name: "Cheaker", category: "Toys" },
  { name: "Harry Potter", category: "Books" },
  { name: "iphone", category: "Electronics" },
  { name: "Learn PHP", category: "Books" },
];

let someProductsBooks = products.some(
  (product) => product.category === "Books"
);
let allProductsBooks = products.every(
  (product) => product.category === "Books"
);
console.log(allProductsBooks);
console.log(someProductsBooks);
