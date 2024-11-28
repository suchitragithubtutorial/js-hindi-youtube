/*
basically there are two types of data types
-primitive 
-non-primitive

primitive
7 types : string , Number , Boolean ,null,undefined,symbol

reference(non primitive)
array , objects , Functions
*/
const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123');

const anotherId = Symbol('123')

console.log(id == anotherId);
//false => bcz the work of symbol is even if u will take 2 
//different things and assign them same values it will take the values completely different.


const bigNumber = 343652364153n

const heros = ["shaktiman","naagraj","doga"];
let myObj = {
    name : "suchitra",
    age : 20,
    myId :225673
}

const myFunction = function(){
    console.log("hello world")
}