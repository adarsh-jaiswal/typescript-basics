var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    //constructor overloading not supported
    // constructor(){
    //     this.firstName = "aj";
    //     this.lastName = "ja";
    // }
    function Person(firstName, lastName) {
        this.firstName = "aj";
        this.lastName = "ja";
    }
    Person.prototype.getFullName = function () {
        return this.firstName + this.lastName;
    };
    Person.prototype.greet = function () {
        console.log("Parent greet");
    };
    return Person;
}());
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // constructor(firstName, lastName){
    //     super(firstName, lastName);
    // }
    Programmer.prototype.greet = function () {
        console.log("Child greet" + _super.prototype.getFullName.call(this));
    };
    Programmer.prototype.greetLikeNormal = function () {
        console.log("Normal greet" + _super.prototype.getFullName.call(this));
    };
    return Programmer;
}(Person));
var person = new Person("ajj", "ada");
person.firstName = "adi";
//console.log(person);
var aProgrammer = new Programmer("aaa", "jjj");
aProgrammer.greet();
//polymorphism
var aProgrammer2 = new Programmer("aaa2", "jjj2");
aProgrammer2.greetLikeNormal();
var Person3 = /** @class */ (function () {
    // constructor overloading not supported
    function Person3(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person3.prototype.getFullName = function () {
        return this.firstName + this.lastName;
    };
    Person3.prototype.greet = function () {
        console.log("Parent greet");
    };
    return Person3;
}());
var aPerson3 = new Person3("aaa", "jjj");
console.log(aPerson3.getFullName());
