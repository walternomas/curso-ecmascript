// enhance object literals

function newUser(user, age, country, uId) {
  // return {
  //   user: user,
  //   age: age,
  //   country: country,
  //   uId: uId
  // }
  return {
    user,
    age,
    country,
    id: uId,
  };
}

console.log(newUser('walternomas',44,'AR', 1));

function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.barking = function() { return `${this.name} says WOOF`}
}
const Kira = new Dog("Kira", 3)
console.log(Kira.barking());