// "use strict"; //treat all Js code as newer version


// //data type convesion//

let score = null;//object
 console.log(typeof(score));
 
 let valueInstring = String(score);
 console.log(typeof valueInstring);
 console.log(valueInstring);


 let isLoggedIn = "";//false

 let bolleanIsLoggedIn = Boolean(isLoggedIn);
 console.log(bolleanIsLoggedIn);

//**************done****************** */

 console.log(true);//true
 console.log(+true);//1


 let num1,num2,num3;
 num1=num2=num3 = 2 + 2;
  let a = 100;
  console.log(++a);//101
 console.log(a++);//100
 console.log(a);
 
 //********** data type done************************* */

// Stack and heap memeory//  


 //stack//
  let a = "pranjal";
  let b = a;
  b = "shukla";
  console.log(b);
  console.log(a);

//Concept//
//when we useing the stack it store the primitavie data type //

  //heap//

//concept//
//it store the non-primitive data type//

 console.log(gamename.toLocaleUpperCase());
console.log(gamename.charAt(1));
console.log(gamename.indexOf('j'));

const newstring = gamename.substring(0,4);
 console.log(newstring);
 const shyam = " jordge "
console.log(shyam);

console.log(shyam.trim());
const url = "https://chaiwala.com/pranjal%30shukla"
console.log(url.replace('%30','-'));
console.log(url.includes('chaiwala'));
console.log(gamename.split())  let user1 = {
    email : "pranjal3@google.com",
    upi :"user@byl"
  }
let usertwo = user1;
usertwo.email = "shukla@google.com";
console.log(user1.email);
console.log(usertwo.email);
**********************done################ */
  

string concatination //

const name = "pranjal";
const Newname = "shukla";
console.log(name+ Newname);//this is wrong mrthod to concatinate two sting in JS//
 
this the write method to concatinate two string //

console.log(`hello my name is ${name} and my surname is ${Newname}`)
const gamename = new String("niranjan");
console.log(gamename.__proto__);

console.log(gamename.length);


//***********done********************* */
 //Numbers

const balance = new Number(100);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));
 
const othernumber = 4.9999;
 console.log(othernumber.toPrecision(2))

 const hundreads = 10000000
  console.log(hundreads.toLocaleString('en-IN'));

  //Maths


  console.log(Math.abs(-5));
  console.log(Math.round(6.6));
  console.log(Math.ceil(6.1));
  console.log(Math.floor(4.1));
  console.log(Math.max(4,3,6,1));



  


