console.log(window)
console.log(screen)
console.log(screen.width)
console.log(screen.avilwidth)
console.log(screen.availHeight)
console.log(screen.height) 
console.log(screen,pixelDepth)
console.log(navigator)
console.log(navigator.geolocation.getCurrentPosition((position) => {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
}));

let instagram=()=>{
    location.assign("https://www.instagram.com/")
}

let facebook=()=>{
    location.href=("www.facebook.com/");
};
let Youtube = () => {
    location.replace("https://www.youtube.com/");
};

