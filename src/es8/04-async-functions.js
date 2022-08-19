const fnAsync =() => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Async!!!'))
      : reject(new Error('Error!'));
  });
};

const anotherFn = async () => {
  const something = await fnAsync();
  console.log(something);
  console.log('done');
};

console.log('Before');
anotherFn();
console.log('After');
