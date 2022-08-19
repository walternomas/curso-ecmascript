// Array destructuring

let fruits = ["Apple", "Banana"];
let [a, b] = fruits;
console.log(a, fruits[1]);

// Object destructuring

let user = { username: "Walter", age: 44 };
let { username, age } = user;
console.log(username, user.age);

// spread operator

let person = { name: "John", age: 44 };
let country = "AR";

let data = { id: 1, ...person, country };
console.log(data);

let kissEmoji = [..."👩‍❤️‍💋‍👩"];
console.log(kissEmoji);

let familyEmoji = [..."👨‍👩‍👦‍👦"];
console.log(familyEmoji);

// rest

function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}

sum(1, 1, 2, 3);
