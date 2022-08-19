// declarando
class User {}

// instancia de una clase
const newUser = new User();

class user {
  // metodos
  greeting() {
    return "Hello";
  }
}

const walternomas = new user();
console.log(walternomas.greeting());

const julian = new user();
console.log(julian.greeting());

// constructor
class usuario {
  constructor() {
    console.log("Nuevo Usuario");
  }
  greeting() {
    return "Hello";
  }
}
const jazmin = new usuario();

// this
class usuaria {
  constructor(name) {
    this.name = name;
  }
  // metodos
  speak() {
    return "Hello";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
}

const ana = new usuaria('Ana');
console.log(ana.greeting());

// setters getters
class Usuario {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // metodos
  speak() {
    return "Hello";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
  get uAge() {
    return this.age;
  }
  set uAge(n) {
    this.age = n;
  }
}

const juliancito = new Usuario('Juli', 11);
console.log(juliancito.uAge);
console.log(juliancito.uAge = 20);