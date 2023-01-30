let next = document.querySelector(".butt1");
let back = document.querySelector(".butt2");
let thingOne= document.querySelector(".thingOne");
let thingTwo= document.querySelector(".thingTwo");

next.onclick=function(){
  thingOne.style.display = "none";
  thingTwo.style.display = "block";
}

back.onclick=function(){
  thingOne.style.display = "block";
  thingTwo.style.display = "none";
}