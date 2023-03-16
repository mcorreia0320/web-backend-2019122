var myLogModule = require('./log.js');

myLogModule.info('Node.js started');

var person = require('./Person.js');

var person1 = new person('James', 'Bond');
var person2 = new person('Miguel', 'Peñaranda');

console.log(person1.fullName());
console.log(person2.fullName());

