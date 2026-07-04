
const password = "0607";
let noClickCount = 0;

function checkPassword(){

let input=document.getElementById("password").value.trim();

if(input===password){

document.getElementById("passwordPage").classList.add("hidden");
document.getElementById("birthdayPage").classList.remove("hidden");

typeBirthday();

}else{

document.getElementById("error").innerHTML="❌ Wrong Password!";

}

}

function typeBirthday(){

let text="🎉 HAPPY BIRTHDAY ❤️";
let i=0;

document.getElementById("birthdayText").innerHTML="";

let typing=setInterval(function(){

document.getElementById("birthdayText").innerHTML+=text.charAt(i);

i++;

if(i>=text.length){

clearInterval(typing);

setTimeout(function(){

document.getElementById("birthdayPage").classList.add("hidden");
document.getElementById("surprisePage").classList.remove("hidden");

},2000);

}

},150);

}

function noClick(){

noClickCount++;

let msg=document.getElementById("message");
let noBtn=document.getElementById("noBtn");

if(noClickCount==1){

msg.innerHTML="🥺 Please choose YES.";

}

else if(noClickCount==2){

msg.innerHTML="💖 Please click YES.";

}

else{

msg.innerHTML="😂 You can't escape!";

noBtn.style.position="absolute";
noBtn.style.left=Math.random()*250+"px";
noBtn.style.top=Math.random()*500+"px";

}

}

function yesClick(){

document.getElementById("surprisePage").classList.add("hidden");
document.getElementById("letterPage").classList.remove("hidden");

document.getElementById("music").play();

}

function showPhoto(){

document.getElementById("letterPage").classList.add("hidden");
document.getElementById("photoPage").classList.remove("hidden");

}
