// استاد کارت - شرط بندی ماهان


let cardBet = 0;
let cardMulti = 1;
let cardProfit = 0;
let cardStarted = false;



function startCard(){


cardBet = Number(
document.getElementById("bet").value
);



if(cardBet <= 0){

alert("مبلغ بازی را وارد کنید");
return;

}



if(!removeCoins(cardBet)){

return;

}



cardMulti = 1;
cardProfit = 0;
cardStarted = true;



document.getElementById("multi").innerHTML = "1";
document.getElementById("profit").innerHTML = "0";

document.getElementById("history").innerHTML =
"کارت خود را انتخاب کنید";



let box =
document.getElementById("card");


box.innerHTML = "❓";

}




function openCard(){


if(!cardStarted){

alert("اول بازی را شروع کنید");
return;

}



let cards = [

"⭐",
"💎",
"🔥",
"💰",
"❌",
"👑"

];


let result =
cards[Math.floor(Math.random()*cards.length)];



document.getElementById("card").innerHTML =
result;



if(result=="❌"){


document.getElementById("history").innerHTML =
"باختی!";



cardStarted=false;


return;


}



cardMulti += 1;



cardProfit =
cardBet * cardMulti;



document.getElementById("multi").innerHTML =
cardMulti;



document.getElementById("profit").innerHTML =
cardProfit.toLocaleString();



document.getElementById("history").innerHTML =
"کارت بعدی را انتخاب کن";



}




function takeCardProfit(){


if(cardProfit <= 0){

alert("سودی برای برداشت ندارید");
return;

}



addCoins(cardProfit);



document.getElementById("history").innerHTML =
"سود دریافت شد";



cardStarted=false;
cardProfit=0;


  }
