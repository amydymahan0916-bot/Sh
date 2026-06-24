let bowlingBet = 0;

let bowlingProfit = 0;

let bowlingMulti = 1;

let bowlingPlaying = false;





let data =
JSON.parse(localStorage.getItem("currentUser"));



if(!data){

alert("ابتدا وارد حساب شوید");

location.href="login.html";

}








function saveUser(){



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



localStorage.setItem(

"currentUser",

JSON.stringify(data)

);



}








function updateCoins(){



let box =

document.getElementById("coins");



if(box){

box.innerHTML =

data.coins.toLocaleString();

}



}



updateCoins();









function startBowling(){



bowlingBet =

Number(

document.getElementById("bet").value

);






if(bowlingBet < 10000){

alert("حداقل ورود 10000 سکه است");

return;

}







if(bowlingBet > data.coins){


alert("موجودی کافی نیست");

return;


}







data.coins -= bowlingBet;

data.games++;





bowlingPlaying=true;







let pins =

Math.floor(

Math.random()*11

);







document.getElementById("ball").innerHTML=

"🎳💨";





document.getElementById("pins").innerHTML=

pins;









if(pins==10){


bowlingMulti=10;


}

else if(pins>=7){


bowlingMulti=5;


}

else if(pins>=4){


bowlingMulti=2;


}

else{


bowlingMulti=0;


}







if(bowlingMulti>0){



bowlingProfit =

bowlingBet * bowlingMulti;






document.getElementById("multi").innerHTML =

"×"+bowlingMulti;





document.getElementById("profit").innerHTML =

bowlingProfit.toLocaleString();






document.getElementById("history").innerHTML=

"عالی! "+pins+
" پین افتاد 🎳";



}

else{



document.getElementById("profit").innerHTML=0;



document.getElementById("history").innerHTML=

"پرتاب ناموفق بود ❌";



bowlingPlaying=false;



}





saveUser();

updateCoins();



}









function takeBowlingProfit(){



if(!bowlingPlaying){


alert("جایزه‌ای ندارید");


return;


}







data.coins += bowlingProfit;



data.wins++;







if(bowlingProfit > data.record){

data.record = bowlingProfit;

}







data.history.unshift(

"بولینگ + "+bowlingProfit+" 🪙"

);







saveUser();

updateCoins();







alert(

"جایزه اضافه شد: "+

bowlingProfit+

" 🪙"

);





bowlingPlaying=false;



}
