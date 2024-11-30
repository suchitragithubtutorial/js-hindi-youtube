const name = "suchitra";
const repoCount = 50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


//another way of declaring string it helps us more by 
//giving me the value of it
const gameName = new String('suchitra-su')

console.log(gameName.__proto__);

console.log(gameName[0]);
//it will give the 0 position of the string . although it is not 
//a array the value that we got by giving position,these position
//names are called as the keys and the values we got is the key value
console.log(gameName.length);
//length of the string
console.log(gameName.toUpperCase());
//it will convert the string to upper case
console.log(gameName.charAt(2));//=>t
console.log(gameName.indexOf('t'))//=>2

const newString = gameName.substring(0,4)//=>not include 4th number
// such
console.log(newString);

const anotherString = gameName.slice(-8,4)
//it will take the value from ending 
console.log(anotherString);


const newStringOne = "  suchitra   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://suchitra.com/suchitra20%dash";
console.log(url.replace('20%','-'));
console.log(url.includes('suchi'))
//it will check if the url includes this part of the string that we have put in ' '
//it will give us true or false

const gameNameOne = new String('suchitra-su-dash');
console.log(gameNameOne.split('-'));
//here '-' is the separator, the split will take the string
//convert it into a array by removing the separator
//ouput => ['suchitra' , 'su' , 'dash']
