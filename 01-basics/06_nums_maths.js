const score = 400 
console.log(score);

const balance = new Number(100);
console.log(balance);
//it will convert the number into anything 
//suppose we will convert it into string
console.log(balance.toString().length);
console.log(balance.toFixed(2))
//when u give toFixed number 100 will get converted => 100.00
//i.e. two spaces will get in decimal
//it is useful while making an E-commerce website
const otherNumber = 123.3457;
console.log(otherNumber.toPrecision(4));
const hundreds = 10000
console.log(hundreds.toLocaleString('en-IN'));

//********************************** Maths******************************* */
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 5, 6));
console.log(Math.max(4, 6, 7, 8, 3));

console.log(Math.random());
//always give the value between 0-1
console.log(Math.floor(Math.random()*10) + 1);
//if anything will come in 0.01234  after multiplying
// with 10 then to avoid that we add a 1

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max - min +1)) * min);





