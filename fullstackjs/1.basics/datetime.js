//year ,month day,hours,minutes,seconds,miliseconds

const currentDate = new Date(2025, 10, 10, 12, 30, 30, 30);
console.log(currentDate);

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const hours = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();
const milisec = date.getMilliseconds();

console.log(`Year:${year}`);
console.log(`Month:${month}`);
console.log(`day:${day}`);
console.log(`hours:${hours}`);
console.log(`minute:${minute}`);
console.log(`seconds:${second}`);
console.log(`miliseconds :${milisec}`);

console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleString());

date.setDate(date.getDate() + 1);
console.log(date);
