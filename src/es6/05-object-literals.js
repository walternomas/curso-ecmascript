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