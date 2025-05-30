let a =0;
for(let a = 0 ; a<=100 ; a++){
    if(a%2===0){
        console.log("Then the number is Even",a);

        
    }
    else{
        console.log("Not even number");
        
    }
}

let GameNum = 100;
let UserNum = prompt("Guess the number game");
while (UserNum    != GameNum) {
    let UserNum=prompt("You guess the wrong number:Guess again")
}
console.log("Congratulation you guess the write number");

 