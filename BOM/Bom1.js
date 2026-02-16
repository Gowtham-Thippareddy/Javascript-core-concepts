let name1=prompt("enter your name")
console.log(name1);

alert("please re login")
let a = confirm("Are you Sure")
if(a){
    alert("Your ticket is Booked")
}else{
    alert("Your ticket is Cancelled")
}


    let count = 0;
setTimeout(() => {
    count++;
    console.log(count);
}, 1000);
