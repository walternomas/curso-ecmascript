// setters getters
class Usuario {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // metodos
  #speak() {
    return "Hello";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
  get #uAge() {
    return this.age;
  }
  set #uAge(n) {
    this.age = n;
  }
}

const juliancito = new Usuario("Juli", 11);
console.log(juliancito.uAge);
console.log((juliancito.uAge = 20));
