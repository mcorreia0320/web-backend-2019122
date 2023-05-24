var person = function (firstName, lastName) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.fullName = function () {
        return this.firstName + " " + this.lastName;
    }
}

person.prototype.greet = function () {
    console.log(" Age of " + this.firstName + " " + this.lastName + " is " + this.age)
}

person.prototype.age = 0;


module.exports = person;