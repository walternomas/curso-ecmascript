var lastName = "Walter";
lastName = "Omar";
console.log(lastName);

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

const animal = 'Cat';
animal = 'Dog';
console.log(animal);

const fruits = () => {
  if(true) {
    var fruit1 = 'Apple'; // function scope
    let fruit2 = 'Kiwi'; // block scope
    const fruit3 = 'Banana'; // block scope
  }
  console.log(fruit1);
  console.log(fruit2);
  console.log(fruit3);
};
fruits();
