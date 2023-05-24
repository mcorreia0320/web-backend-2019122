var obj = {
    name: 'Miguel',
    age: '20',
    gender: 'M'
};

var personJSON = JSON.stringify(obj);

var stringobj = '{"name": "Miguel", "age": "20", "gender": "M"}';

// console.log(JSON.parse(stringobj));

var person = require("./person.js");

var person1 = new person("Miguel", "Peñaranda");
var person2 = new person("Jacky", "Camara");
var person3 = new person("Saul", "Pinto");

person1.age = 20;
person2.age = 18;
person3.age = 22;

// person1.greet()

// console.log(person1.__proto__);
// console.log(person2.__proto__);
// console.log(person1.__proto__ == person2.__proto__);

var Config = require("./config.js");
var Emitter = require("./emitter.js");
const config = require("./config.js");

var emitter = new Emitter();

emitter.on(config.events.LOGIN, function () {
    console.log("LOGIN 1");
});

emitter.on(config.events.LOGIN, function () {
    console.log("LOGIN 2")
});

emitter.emit(config.events.LOGIN);