try {
  hello();
} catch (e) {
  console.log(e.name);
}

try {
  anotherFn();
} catch {
  console.log('Esto es un error');
}
