function print(data) {
  console.log(data);
}
const songs = [
  { name: "Lucky you", duration: 4.3 },
  { name: "Lucky me", duration: 4 },
  { name: "Lucky they", duration: 3 },
  { name: "Lucky tum", duration: 3 },
];
console.log(songs.filter((item) => item.name.includes("you")));
console.log(songs.filter((item) => item.duration > 3));

const computers = [
  { ram: 4, hdd: 100 },
  { ram: 8, hdd: 200 },
  { ram: 12, hdd: 300 },
  { ram: 16, hdd: 400 },
  { ram: 32, hdd: 500 },
];

console.log(computers.filter((com) => com.ram >= 16));

console.log("Challanges________");
const ages = [32, 33, 16, 40];
print(ages.filter((age) => age >= 18));

print("Another challanges______");
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
print(words.filter((word) => word.length > 6));
