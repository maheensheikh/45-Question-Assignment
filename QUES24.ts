//test for equality or inequality with strings
const str1 :string ="GREETINGS!";
const str2 :string ="greetings!";
console.log(str1!==str2);//true
console.log(str2===str1);//false
//test for using the lower case function
const firstNAME :string="MAHEEN";
const nickName : string ="Mahi";
console .log(firstNAME.toLowerCase()!==nickName);//true
// numerical tests involving equality and inequality
const number1 : number = 33;
const number2 : number = 45;
console .log (number1===number2);//false
console .log( number1!==number2);//true
//greater than or less than
console.log(number1 > number2);
console.log(number1 < number2);
//greater than and equalto AND VISEVERSA
console.log(number1 <= number2);
console.log(number1>= number2);
//test using " and""" or "operators 
const xx : number=12;
const yy : number=10;
const zz : number=9;
console.log(xx>yy&& yy>zz );
console.log(xx>zz || xx<yy);
console .log (xx<yy && xx>zz );
console.log(xx<zz || zz>yy);
console.log("test  whether item is in array")
let itemArray:string[]=["APPLE","BANANA","green","GRAPES",
"PINEAPPLE","44","yellow"];
console.log(itemArray.includes("APPLE"));
console.log(itemArray.includes("KIWI"));
//item is in the array
console.log(itemArray.includes("purple"));
console.log(itemArray.includes("green"));
