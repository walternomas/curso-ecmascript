const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if(true) {
      resolve('Hey!!');
    } else {
      reject('Whooooops!!');
    }
  });
};

anotherFunction()
  .then(response => console.log(response))
  .catch(err => console.error(err));

