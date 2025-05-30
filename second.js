console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10 + 1))
const max = 20;
const min =  5;
console.log(Math.floor(Math.random()*(max - min + 1))  + min);
console.log(Math.ceil(5.99));
  
//Date and time //

let todaydate = new Date()
console.log(todaydate.toDateString());
console.log(todaydate.toString());
console.log(todaydate.toISOString());
console.log(todaydate.toLocaleDateString());
console.log(todaydate.toJSON());
console.log(typeof todaydate);
 
let myCreatedate = new Date(2025,4,8,5,2);
console.log(myCreatedate.toLocaleString());

let fuctionDate = new Date("01-12-2025");
console.log(fuctionDate.toLocaleDateString())
console.log(fuctionDate.getDay())

//time stamps//


let myTimestamp = Date.now()
console.log(myTimestamp);
console.log(myCreatedate.getTime());
console.log(Math.floor(Date.now()/1000));//conversion in second//

