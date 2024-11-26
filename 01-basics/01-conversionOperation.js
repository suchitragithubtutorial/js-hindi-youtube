let score = 33//null,undefined,true

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

/*
"33" => 33
"33abc" => NaN
true => 1; false => 0
*/
let isLoggedIn = 1
let booleanLoggedIn = boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
/*
1 => true ,
0 => false,
"" => false
"hitesh" => true
*/
let someNumber = 33
let stringNumber = string(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber);

// *********************************operation *******************///
let value = 3
let negValue = -value
console.log(negValue);


console.log(2+2)
console.log(2-2)
console.log(2%2)
console.log(2/2)

let str1 = "hello"
let str2 = "suchitra"

let str3 = str1 + str2;
console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+ 2+ 2);
console.log(1+2+"2")

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);


let x = 2;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "3" & "2"
//If used postfix, with operator after operand (for example, x++),
// the increment operator increments and returns the value before incrementing.
let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
//If used prefix, with operator before operand (for example, ++x), 
//the increment operator increments and returns the value after incrementing.


