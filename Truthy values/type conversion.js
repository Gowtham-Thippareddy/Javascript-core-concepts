// Implicit type Conversion 
let num1=10
let num2="20"
console.log(num1+num2)
// here it take as string 1020

console.log(10>8>7)
// Here 10 > 8 is ture, it means value '1' then..,,( internally converted to boolean if it is true takes '1' if it is false '0' )
//  it takes 1 > 7 is false So output is "false"

console.log(10>5>0)
// here 10>5 is true it takes internally 1 then compare 1>0 , yes it is "ture"

console.log(0 || 5)
// 0 means falsy So, it takes latest value 5 

console.log(1 || 5 )
// here 1 means true ,takes 1

console.log(Boolean(2))
// here in the bracket, value is present to in the boolean it is ture.

console.log(2 && 5)
// here both are truthy value so it takes lateset value 5.

console.log(4 && 0)
console.log(0 && 4)
// Here && opereator , if zero(fasly) value is present in the bracket it will return '0' as immedieatly 
// ther is no zero in the bracket they will return latest updated value.

