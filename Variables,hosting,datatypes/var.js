// print Global scope

let a = 10; 
var b = 20;
const c = 30;
console.log(a);
console.log(b);
console.log(c);

// local scope 

function demo(){
    console.log("I am a Local Scope");
    var  i = 40;
    let j = 55;
    const k = 99;
    console.log(i);
    console.log(j);
    console.log(k);
    console.log(a);
    console.log(b);
    console.log(c);
    
}
demo();

// block scope 
{
    var g = 79;
    let h = 8888;
    const n= 999;
    console.log("I am Block scope")
    console.log(g);
    console.log(h);
    console.log(n);
}
console.log("hai",g);

// scripit scope we can see inspect ---> source --> select the varaibles and debug and see scope





