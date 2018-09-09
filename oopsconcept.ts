class Person {
    firstName : string;
    lastName : string;
    //constructor overloading not supported
    // constructor(){
    //     this.firstName = "aj";
    //     this.lastName = "ja";
    // }
    constructor(firstName, lastName){
        this.firstName = "aj";
        this.lastName = "ja";
    }
    getFullName() {
        return this.firstName + this.lastName;
    }

    greet() {
        console.log("Parent greet");
    }
}

class Programmer extends Person {
    // constructor(firstName, lastName){
    //     super(firstName, lastName);
    // }
     greet() {
        console.log("Child greet"+super.getFullName());
    }
    greetLikeNormal() {
        console.log("Normal greet"+super.getFullName());
    }
}

var person = new Person("ajj", "ada");
person.firstName = "adi";
//console.log(person);


var aProgrammer = new Programmer("aaa", "jjj");
aProgrammer.greet();

//polymorphism
var aProgrammer2 : Programmer = new Programmer("aaa2", "jjj2");
aProgrammer2.greetLikeNormal();

class Person3 {
  
   // no need of declaring member variables
    constructor(private firstName : string, private lastName : string){
       
    }
    getFullName() {
        return this.firstName + this.lastName;
    }

    greet() {
        console.log("Parent greet");
    }
}
var aPerson3 = new Person3("aaa", "jjj");
console.log(aPerson3.getFullName());