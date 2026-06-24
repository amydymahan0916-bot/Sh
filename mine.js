let mineBet = 0;

let mineMulti = 1;

let mineProfit = 0;

let playingMine = false;

let mines = [];





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



let coin = document.getElementById("coins");


if(coin){

coin.innerHTML =

data.coins.toLocaleString();

}


}



updateCoins();









function startMine(){


mineBet =

Number(

document.getElementById("bet").value

);





if(mineBet < 10000){

alert("حداقل ورود 10000 سکه است");

return;

}







if(mineBet > data.coins){

alert("موجودی کافی نیست");

return;

}







data.coins -= mineBet;


data.games++;






playingMine=true;

mineMulti=1;

mineProfit=mineBet;

mines=[];







while(mines.length<3){


let x =

Math.floor(Math.random()*9);



if(!mines.includes(x)){


mines.push(x);


}


}






document.getElementById("multi").innerHTML=

"×1";



document.getElementById("profit").innerHTML=

mineProfit.toLocaleString();






document.getElementById("history").innerHTML=

"خانه‌ها را انتخاب کن 💎";







document.querySelectorAll(".mineCell")

.forEach(cell=>{


cell.innerHTML="?";

cell.style.background="#111";


});





saveUser();

updateCoins();



}









function openCell(cell,index){



if(!playingMine){

alert("اول بازی را شروع کن");

return;

}






if(mines.includes(index)){



cell.innerHTML="💣";


cell.style.background="#700";




document.getElementById("history").innerHTML=

"مین پیدا شد! باخت ❌";




document.getElementById("profit").innerHTML=0;



playingMine=false;




saveUser();

updateCoins();



}

else{



cell.innerHTML="💎";




mineMulti++;




mineProfit =

mineBet * mineMulti;






document.getElementById("multi").innerHTML=

"×"+mineMulti;






document.getElementById("profit").innerHTML=

mineProfit.toLocaleString();





}






}









function takeMineProfit(){



if(!playingMine){


alert("جایزه‌ای ندارید");

return;


}







data.coins += mineProfit;



data.wins++;







if(mineProfit > data.record){

data.record = mineProfit;

}







data.history.unshift(

"مین + "+mineProfit+" 🪙"

);






saveUser();

updateCoins();






alert(

"جایزه اضافه شد: "+

mineProfit+

" 🪙"

);






playingMine=false;



  }
