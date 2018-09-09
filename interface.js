var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo.prototype.getFullName = function () {
        return this.firstName + this.lastName;
    };
    return Foo;
}());
var aPerson = new Foo();
var someObj = {
    firstName: "string",
    lastName: "jais",
    getFullName: function () {
        return "aj";
    }
};
aPerson = someObj;
