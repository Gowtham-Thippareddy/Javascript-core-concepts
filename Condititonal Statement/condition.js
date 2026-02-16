// Conditional Statements will execute randomly 
/*  1. If
    2. If else
    3. else -if ladder 
    4. switch case

*/

let num = 12
if(num%2 == 0){
    console.log("even");
}else{
    console.log("Odd")
}
// practice 
let age = 19
if(age >=18 ){
    console.log("elgible For vote")
}else{
    console.log("Not Elgibile for vote")
}

// elif
let num2 = 52
if( num2%2==0 && num2%4==0){
    console.log("It is dvisible by 2 and 4")
}else if(num2%2==0){
    console.log(" It is divisible by 2")

}else if(num2%4==0){
    console.log("It is divisible by 4")
}else{
    console.log("it is not divisible by both")
}

// Switch Case

let day =4;
switch(day){
    case 1:{
        console.log("Monday")
        break;
    }case 2:{
        console.log("Tuesday")
        break;
    }case 3:{
        console.log("wednsday")
        break;
    }case 4:{
        console.log("Thursday")
        break;
    }default:{
        console.log("Invalid day")
    }
}

