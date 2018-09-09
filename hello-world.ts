var func =  () => 'response';

var a: number;
var b: boolean;
var c: string;
var d: undefined;//no use

a = 10;
b = true;


var arr: number[];
arr = [1,2,3];
arr.push(4);

// tuple can contain multiple data type
var myArr: [number, boolean] =[1, true];

function myAdd (a : number, b : number) {
    return a + b;
}

var sum = myAdd(2, 2);
console.log(sum);


//optional argument to function
//always at the end
//if consumer doesnt send value then default is asigned c=0 and d can be numeric value
function myAdd2 (a : number, b : number, c = 0, d? : number, e : number = 0) : number{
    return a + b + c;
}

//var sum2 = myAdd2(2, 2, 'aj');
//console.log(sum2);

//implicit typing
//var x = 10;
//x = "ada";

//implicit typing with function
function greet() : string{
    return "good morning";
}

var greeting = greet();//type is string implicitly - if assignment is in same line as declaration. 

var anyGreeting ;
anyGreeting = greet();// type is any 



//union type
var z : number | boolean;
z= 10;
z = true;
//z = "";