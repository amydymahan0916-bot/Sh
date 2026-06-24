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



let user
