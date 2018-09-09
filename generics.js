"use strict";
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
exports.__esModule = true;
var Person_1 = require("./Person");
function echo(args) {
    return args;
}
// class Person {
//     firstName : string;
//     lastName : string;
//     constructor(firstName: string, lastName: string){
//         this.firstName = "aj";
//         this.lastName = "ja";
//     }
//     getFullName() {
//         return this.firstName + " " + this.lastName;
//     }
// }
//commented after import 
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Admin;
}(Person_1.Person));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Manager;
}(Person_1.Person));
var admin = new Admin('a', 'a');
var manager = new Manager('a', 'a');
function personEcho(person) {
    return person;
}
var foo = personEcho(admin);
var bar = personEcho(manager);
