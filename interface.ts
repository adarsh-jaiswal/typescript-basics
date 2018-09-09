interface Person2 {
    firstName : string;
    lastName : string;
    getFullName () : string;
}

class Foo implements Person2 {
    firstName: string;
    lastName : string;
    getFullName () : string {
        return this.firstName + this.lastName;
    }
}

var aPerson : Person2 = new Foo();

let someObj = {
    firstName : "string",
    lastName : "jais",
    extraVariable : "ad",
    getFullName () {
        return "aj";
    }
};

aPerson = someObj;