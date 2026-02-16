/* array looping methods
*/
/* 
 1.map()
-It is used to iterate the values of an array
-It will return a new array 
  */  

let arr=[1,2,3,4,5,6,7,8,9,10];
for(i=0;i<arr.length;i++){
    console.log(arr[i]**2);
}

let arr1=[1,2,3,4,5,6,7,8,9,10];
let sup=[];
for(i=0;i<arr1.length;i++){
    sup.push(arr1[i]**2);
} console.log(sup);


// using map()

let midsquare= arr.map((value) => value**2);
console.log(midsquare);
// in the place of "value" we can replace any userdefied keyword

// filter its means filter the items 
let evenArray=arr.filter((value)=>value%2==0);
console.log(evenArray);
let oddArray=arr.filter((value) => value%3==0);
console.log(oddArray);

//reduce , reduce means total sum of the  array.
let reduceValue=arr.reduce((value,total)=> (total += value))
console.log(reduceValue);

// here is the simple method to use reduce
let sum = arr.reduce((sum,num) => sum+num,0);
console.log(sum);

let name=["G","a","n","i"];
let reversename=name.reverse()
console.log(reversename); // For reverse the string 

// For eac only iterating purpose not return the value
let arrayForEach = arr.forEach((value) =>value);
console.log(arrayForEach);// it prints a "Undefined"

// ForEach
let plus =0;
arr.forEach((value)=>{
  plus = plus+value;
});
console.log(plus)