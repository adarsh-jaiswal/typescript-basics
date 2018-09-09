import {Person} from './Person' 
function echo<T>(args : T) : T{
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
class Admin extends Person {

}

class Manager extends Person {

}

let admin = new Admin('a', 'a');
let manager = new Manager('a', 'a');

function personEcho<T extends Person>(person : T) : T {
    
    return person;
}

var foo = personEcho(admin);
var bar = personEcho(manager);