

// console.log("JavaScript is connected!");
// let name = "Saniya"

// var n = 20
// var m = 50 

// console.log(n+m)
// console.log(n-m);
// console.log(n*m);
// console.log(n/m);

// var n = 60
// console.log(n+m);
// console.log("20"+30)

// let c = 10
// console.log(typeof(c));

// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof "10");
// console.log(typeof 10);

// let a = "10";
// let b = 5;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);

// console.log(Boolean(0));
// console.log(Boolean(1));
// console.log(Boolean(""));
// console.log(Boolean("hello"));
// console.log(Boolean(null));
// console.log(Boolean([]));
// console.log(Boolean({}));

// let obj = {
//     name: "saniya",
//     usn: "3vy23cs039",
//     college:"vtu cpgs klg",
//     branch:"cse",
//     course:"B.tech"
// }
// console.log(obj)

//This copied the value
let x = "saniya";
let y = x;

x = "sanu"

console.log("value of x is:", x);
console.log("value of y is:",y);


//This copied the refrence 
let p = {name: "saniya"}
let q = p;
p.name = "sanu is queen"
console.log(p);
console.log(q);


//Arrays
let fruits = ['apple', 'banana', 'mango', 'graps', 'watermillen', 'lichi', 'pinapple']

console.log(fruits);
console.log(typeof(fruits));
console.log(fruits[3]);

//functions
function hello(){
    let x = 10;
    console.log(x);
    
}
hello()

//Hoisting

console.log(a);
console.log(this.a);
console.log(window.a);

var a = 10;
console.log(a);
console.log(this.a);
console.log(window.a);

console.log(window);
console.log(this == window);


//functions - first class citizens
//Higher-order functions

function add(a, b){
    return a+b;
}
console.log(add);
console.log(add(2, 4));

let sum = function(a, b){
    return a+b;
}


function operate(operationFunc, a, b){
    return operationFunc(a, b);
}
console.log(sum, 2, 5);
console.log(operate(sum, 6, 7));


//Arrow functions

let mul = (a,b) => a*b;

let div = (a, b) => a/b;
function operaters(opfunc, a, b){
    return opfunc(a, b);
}
console.log(operaters(mul, 3, 5));
console.log(operaters(div, 10, 5));

//Fuction + lexical Scope = Closure
let s= 10

function outer(){
    a= 100
    function inner(){
        console.log(a);
        
    }
    return inner;
}

let returnFuncVar = outer();
a= 20;
console.log(returnFuncVar);
returnFuncVar()
