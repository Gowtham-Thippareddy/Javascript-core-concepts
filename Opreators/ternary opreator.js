/*  Ternary Opreator
Here we are writing conditions in single line

1. condition && true; ==> only for if it is also 
called short circute method.

2. condition ?true: false ==> false --> if else

3. condititon ? true:(condition)? ture:false;else-if ladder

*/ 
let num=15;
num %2 ==0? console.log("even"): console.log("odd");

// If ladder
num %2 == 0 && num%3 ==0 
?console.log("2 and 3") 
:num%2==0
?console.log("it is divisible by 2")
:num%3==0
?console.log("It is divisible by 3")
:console.log("it is not divisible by both")

