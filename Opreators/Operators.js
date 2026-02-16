/* 
==== Opereators 
It is Combination of  both "operand" ex=a,b and "operations" ex=+,-*
> types of Operators 
>1. Arthmetic Operator (+,-,/,*,%)
>2. Relational Opereator (>,<,<=,>=,!=,==,===)
>3. Assingment Opereator (+=, -=, *=, /=)
>4. logical Operator (&&, || , !)
>5. Teranary Operator (condition? true: false)
*/

// Arthmetic operator
let  a = 100;
let  b = 99;

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(b++)
console.log(a++)
console.log(++a)
console.log(--a)
console.log(a--)
console.log(a)
console.log(b)


// Relational Opreators 
let c=9
let d=6
console.log(c<d)
console.log(c>d)
console.log(c!=d)
console.log(c<=d)
console.log(c>=d)
console.log(c==d)
console.log(a===b)

// Assignment opreator 

let x = 3
let y =4
x+=y
console.log(x)
x-=y
console.log(x)
x%=y
console.log(x)

// Logical Opreator 

console.log(a==b && b==a)
console.log(a<b || b<a)
console.log(!(a>b && b>a))