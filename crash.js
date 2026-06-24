let data =
JSON.parse(localStorage.getItem("currentUser"));



if(!data){

alert("ابتدا وارد حساب شوید");

location.href="login.html";

}



let bet = 0;

let multiplier = 1;

let playing = false;

let crashPoint = 0;

let timer;







function saveUser(){


localStorage.setItem(
"currentUser",
JSON.stringify(data)
);



let users =

JSON.parse(localStorage.getItem("users")) || [];



let index = users.findIndex(

u=>u.id === data.id

);



if(index !== -1){

users[index]=data;

}



localStorage.setItem(

"users",

JSON.stringify(users)

);



}









function update(){


data =

JSON.parse(localStorage.getItem("currentUser")) || data;



let coin = document.getElementById("coins");



if(coin){

coin.innerHTML =

data.coins.toLocaleString();

}



}



update();









function startFly(){



if(playing)

return;





bet =

Number(

document.getElementById("bet").value

);






if(bet < 10000){


alert("حداقل ورود 10000 سکه است");

return;


}







if(bet > data.coins){


alert("موجودی کافی نیست");

return;


}







data.coins -= bet;


data.games++;





multiplier = 1;


playing = true;






crashPoint =

Number(

(Math.random()*6+1).toFixed(2)

);







document.getElementById("betView").innerHTML =

bet.toLocaleString();





document.getElementById("cashout").disabled=false;



document.getElementById("message").innerHTML =

"🚀 پرواز شروع شد";







saveUser();

update();






timer = setInterval(()=>{



multiplier += 0.01;







document.getElementById("multi").innerHTML =

multiplier.toFixed(2)+"×";





if(document.getElementById("multiplier")){


document.getElementById("multiplier").innerHTML =

multiplier.toFixed(2)+"×";


}






let profit =

Math.floor(

bet * multiplier

);





document.getElementById("profit").innerHTML =

profit.toLocaleString();







if(multiplier >= crashPoint){


crash();


}



},80);




}









function cashOut(){



if(!playing)

return;







clearInterval(timer);







let reward =

Math.floor(

bet * multiplier

);







data.coins += reward;



data.wins++;





if(reward > data.record){

data.record = reward;

}







data.history.unshift(

"پرواز + "+reward+" 🪙"

);







playing=false;



document.getElementById("cashout").disabled=true;







document.getElementById("message").innerHTML =

`

💰 برداشت موفق

<br><br>

ضریب:

${multiplier.toFixed(2)}×

<br>

دریافت:

${reward.toLocaleString()} 🪙

`;







saveUser();

update();



}









function crash(){



clearInterval(timer);



playing=false;



document.getElementById("cashout").disabled=true;







let chart =

document.querySelector(".chart");



if(chart){

chart.classList.add("crash");

}







document.getElementById("message").innerHTML =

`

💥 سقوط کرد

<br><br>

ضریب:

${multiplier.toFixed(2)}×

<br>

شرط از بین رفت

`;






saveUser();

update();



  }
