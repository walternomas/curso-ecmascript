const user = { username: "walternomas", age: 44, country: "AR" };
const { username, ...values } = user;
console.log(username);
console.log(values);
