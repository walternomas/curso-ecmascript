function newUser(name, age, country) {
  var name = name || 'Walter';
  var age = age || 44;
  var country = country || 'AR';
  console.log(name + ' ' + age + ' ' + country);
}

newUser();
newUser('Omar', 15, 'CO');

function newAdmin(name = 'Omar', age = 44, country = 'AR') {
  console.log(name + ' ' + age + ' ' + country);
}

newAdmin();
newAdmin('Ana', 28, 'PE');
