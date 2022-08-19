function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(['Walter', 'Juli', 'Mariana', 'JAzmín', 'Yuyi']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
