var func = function () { return 'response'; };
var a;
var b;
var c;
var d; //no use
a = 10;
b = true;
var arr;
arr = [1, 2, 3];
arr.push(4);
// tuple can contain multiple data type
var myArr = [1, true];
function myAdd(a, b) {
    return a + b;
}
var sum = myAdd(2, 2);
console.log(sum);
//optional argument to function
//always at the end
//if consumer doesnt send value then default is asigned c=0 and d can be numeric value
function myAdd2(a, b, c, d, e) {
    if (c === void 0) { c = 0; }
    if (e === void 0) { e = 0; }
    return a + b + c;
}
//var sum2 = myAdd2(2, 2, 'aj');
//console.log(sum2);
//implicit typing
//var x = 10;
//x = "ada";
//implicit typing with function
function greet() {
    return "good morning";
}
var greeting = greet(); //type is string implicitly - if assignment is in same line as declaration. 
var anyGreeting;
anyGreeting = greet(); // type is any 
