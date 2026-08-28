"use strict";

const { log } = require("node:console");

let name = "Saniya"
let age = 20
let loggedIn = true


//number
//bigint
//string
//boolean
//null
//undefined
//symbol
//object

console.log(typeof name);
console.log(typeof age);


//***************************operations****************************** */

let value = 3


//***************************** Array, Objects, functions******* */

const heros = ["shaktiman", "spiderman", "flyingjet", "superman"];

let myObj = {
    name: "Saniya",
    age : 22,
}

const myFunction = function(){
    console.log("Hello World")
}
myFunction()

const name1 = "hitesh"
const repoCount = 50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String("saniya")

console.log(gameName.length)
console.log(gameName.toLowerCase())
console.log(gameName.charAt(2));
console.log(gameName.indexOf("i"))

const anotheString = gameName.slice(-8, 4)
console.log(anotheString);

const newStringOne = "          saniya         "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://saniya.com/saniya%20bammanalli"

console.log(url.replace("%20", '-'));



//================ maths ++======================

console.log(Math);
