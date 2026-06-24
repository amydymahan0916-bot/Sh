let wheelBet = 0;

let wheelProfit = 0;

let wheelMulti = 1;

let wheelPlaying = false;





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


let coin = document.querySelector(".coin");


if(coin){

coin.innerHTML =

"🪙 "+data.coins.toLocaleString();

}


}



updateCoins();








function spinWheel(){



wheelBet =

Number(

document.getElementById("bet").value

);







if(wheelBet < 10000){

alert("حداقل ورود 10000 سکه است");

return;

}







if(wheelBet > data.coins){

alert("موجودی کافی نیست");

return;

}







data.coins -= wheelBet;


data.games++;







wheelPlaying = true;







let rewards = [


{
name:"باخت",
multi:0
},


{
name:"برگشت",
multi:1
},


{
name:"جایزه کوچک",
multi:2
},


{
name:"جایزه خوب",
multi:5
},


{
name:"جایزه ویژه",
multi:10
}


];







let result =

rewards[

Math.floor(

Math.random()*rewards.length

)

];







document.getElementById("wheel").innerHTML=

"🎡";





document.getElementById("reward").innerHTML=

result.name;






wheelMulti =

result.multi;





document.getElementById("multi").innerHTML=

wheelMulti;







if(wheelMulti > 0){



wheelProfit =

wheelBet * wheelMulti;






document.getElementById("profit").innerHTML=

wheelProfit.toLocaleString();







document.getElementById("history").innerHTML=

"نتیجه: "+

result.name+

"<br>ضریب ×"+

wheelMulti;






}

else{



wheelProfit=0;





document.getElementById("profit").innerHTML=

0;






document.getElementById("history").innerHTML=

"گردونه خراب شد ❌";






wheelPlaying=false;



}







saveUser();

updateCoins();



}









function takeWheelProfit(){



if(!wheelPlaying){

alert("جایزه‌ای ندارید");

return;

}







data.coins += wheelProfit;



data.wins++;







if(wheelProfit > data.record){

data.record = wheelProfit;

}







data.history.unshift(

"گردونه شانس + "+wheelProfit+" 🪙"

);







saveUser();

updateCoins();







alert(

"جایزه اضافه شد: "+

wheelProfit+

" 🪙"

);







wheelPlaying=false;



  }
