let  CalVowels=(str) =>{
       let count =0;
for(const char in str){
 
    if (char==='a'||char==='b'|char==='e'||char==='i'||char==='o'||char==='u') {
        
        count++
    }


}    
console.log(count);
}
let arr = [1,3,4,5,56,7,2];
arr.forEach(function printVal(val,idx,arr) {
    console.log(val,idx,arr);
    
})
let arr2 = ["chinnai","pune","Lucknow"];
arr2.forEach(place=> {
    console.log(place.toUpperCase(),idx);
    
});

let Arr = [1, 2, 3, 4];
Arr.forEach((value) => {
  console.log(value * value);
});

let Arr = [1, 2, 3, 4];
let newARR=Arr.map((value) =>{
    return value;
    
// });
console.log(newARR);



let Arr = [1, 2, 3, 4];
let newARR=Arr.filter((value) =>{
    return value>2==0;
    
});
console.log(newARR);

let calSquare=((value) => {
  console.log(value * value);
});
Arr.forEach(calSquare);

let arr = [40,20,50,91,93,77,88,100,99,75,83]
let newarr=arr.filter((Marks)=>{
return Marks>90;

});
console.log(newarr);
let RightNumber=5
let GuessTHEnumberGame=() =>{
let UserNum = prompt("Guess the number game ")
while (UserNum != RightNumber) {
    console.log("You guess the wrong number Guess it again");

}
console.log("Congratulation you Guess the write number ");

};
