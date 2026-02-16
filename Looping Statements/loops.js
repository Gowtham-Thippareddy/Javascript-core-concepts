/* Looping Statements
    1.For loop
    2.while loop
    3.do while loop
 */
// For loop
for(let i=0;i<=5;i++){
    console.log(i)
}
// to get output as starting as 0 and print up 0 to 5

// While loop
let a=1 //starting from 1
while (a<=10){
    console.log(a) 
    a++; // Increase value upto a=10
}
// to get output as 1,2,3 ....10.

// do while 
let b=1; // starting from 1
do{
    console.log(b)
    b++ // increase value 
}while(b<=5);



// loops 

let num=12
let count=0
if(num ==2 || num==3){
    console.log("Prime Numbb")
}else{
    for(i=2;i<num;i++){
        if(num%i == 0){
            count++;
        }
    }
    if(count==0){   
        console.log("prime")
    }else{ 
        console.log("not a prime")
    }
}

// for loop
for(let i=1;i<101;i++){
    let count=0;
    if(i==1){
        continue
    }else{
        for(let j=2;j<i;j++){
            if(i%j==0){
                count++;
            }
        }
        if (count===0){
            console.log("prime:"+i)
        }
    }
}

// While loop
console.log("I am While loop")
let k=1
while(k<=9){
    console.log(k)
    k++;// k value increases
}

// do while
let h=1
do{
    console.log(h)
    h++;
}while(h<=5);