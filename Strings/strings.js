/**     Strings
  It is a group of characters or words 
  to create a string we have totally 2 ways
  
  ==> Literal way
  "",'',`` (template String)
  ex = "Hello",'hello',`hello`

  ==> Constructor way
    let str = new string("hello")
 */

// literal way
let name="Gowtham"
let name1='Gani'
let name2=`prasad`
console.log(name)
console.log(name1)
console.log(name2)

// Constructor way
let str = new String("hello")
console.log(str)
console.log(typeof(str))

// Methods of strigns

console.log(str.length)
console.log(str.at(4))
console.log(str.at(-4))

// it will not support -ve values

console.log(str.charAt(-4))

// It will display ASCII value
console.log(str.charCodeAt(2))

let str1 = '    Hello   '
console.log(str1)
console.log(str1.trim())

let str2 = '    Welcome    '
console.log(str2)
console.log(str2.trimStart())
console.log(str2.trimEnd())

let str3="I learning Java Script"
console.log(str3.slice(2,5)) // it prints the between words 2 to 5
console.log(str3.substring(2,-5)) 
// (start,end) (2,-5) So js ignore the negative value, they take 0 
// replace of negative value (2,0) and swap them (0,2) ==> 0=I,1=space

let hel='hello'
console.log(hel)
console.log(hel.replace("e","o"));

let wel='welcome'
let con='congragulations'
let tq='thank you'
console.log(wel.concat(con,tq));
