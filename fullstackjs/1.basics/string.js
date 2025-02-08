//1. concatation
let firstName = "imran";
let fullName = firstName.concat(" HASAN");
console.log(fullName);

//2.append
firstName += "     Append Hasan";
console.log(firstName);

//3.length

console.log(firstName.length);

//4.cases

console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());

//5. slice
console.log(firstName.slice(0, 5));

//split and join
console.log(firstName.split(" ").join("0"));
console.log(firstName.split(""));

//7. includes
console.log(firstName.includes("X"));
console.log(firstName.includes("I"));

//8. Trim
console.log(firstName);

console.log(firstName.trim());

let desc = `this is some rnadom 
   text `;
console.log(desc);
console.clear();
//challanges

let favActorFirstName = "IMran";
let favActorLastName = "hasan";
let ActorfullName = favActorFirstName.concat(favActorLastName);
console.log(ActorfullName);
console.log(ActorfullName.toUpperCase());
console.log(ActorfullName.toLowerCase());

let message = `My favorite Actor is ${ActorfullName.toUpperCase()} & say something about your fav actor`;
console.log(message);
