// سیستم کاربری سایت ماهان


function register(){


let username = document.getElementById("username").value.trim();



if(username === ""){


document.getElementById("msg").innerHTML =
"نام کاربری را وارد کنید";


return;


}



let user = {

name: username,

coins: 0,

games: 0,

wins: 0,

losses: 0

};



localStorage.setItem(
"user",
JSON.stringify(user)
);



document.getElementById("msg").innerHTML =
"ثبت نام موفق بود";



setTimeout(()=>{

window.location.href="index.html";

},1000);



}







function login(){


let username =
document.getElementById("loginUser").value.trim();



let user =
JSON.parse(localStorage.getItem("user"));



if(user && user.name === username){



document.getElementById("msg").innerHTML =
"ورود موفق";



setTimeout(()=>{

window.location.href="index.html";

},800);



}else{


document.getElementById("msg").innerHTML =
"حسابی با این نام پیدا نشد";


}



}








function logout(){


localStorage.removeItem("user");


window.location.href="login.html";


}








function getUser(){


let user =
JSON.parse(localStorage.getItem("user"));



return user;


}







function addCoins(amount){


let user = getUser();



if(user){


user.coins += amount;


localStorage.setItem(
"user",
JSON.stringify(user)
);


}



}







function removeCoins(amount){


let user = getUser();



if(user && user.coins >= amount){



user.coins -= amount;



localStorage.setItem(
"user",
JSON.stringify(user)
);



return true;



}



alert("موجودی کافی نیست");


return false;



}







function updateStats(type){


let user = getUser();



if(!user) return;



if(type=="win"){


user.wins++;


}



if(type=="lose"){


user.losses++;


}



user.games++;



localStorage.setItem(
"user",
JSON.stringify(user)
);



}








function loadUser(){


let user = getUser();



if(!user) return;





let coins =
document.querySelectorAll(".coin");



coins.forEach(item=>{


item.innerHTML =
"🪙 " + user.coins.toLocaleString();


});





let names =
document.querySelectorAll(".gold");



names.forEach(item=>{


item.innerHTML =
user.name;


});



let username =
document.getElementById("profileName");



if(username){


username.innerHTML =
user.name;


}




}





window.onload = loadUser;
