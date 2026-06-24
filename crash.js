let crashBet = 0;

let crashMulti = 1;

let crashProfit = 0;

let crashPlaying = false;

let crashTimer;

let crashLimit;





function startCrash(){



crashBet =
Number(
document.getElementById("bet").value
);



if(crashBet<=0){

alert("مبلغ بازی را وارد کنید");

return;

}



if(!removeCoins(crashBet)){

return;

}




crashMulti=1;

crashProfit=crashBet;

crashPlaying=true;



crashLimit =
(Math.random()*8)+1.5;



document.getElementById("history").innerHTML =
"پرواز شروع شد 🚀";



clearInterval(crashTimer);



crashTimer=setInterval(()=>{



crashMulti += 0.1;



document.getElementById("multi").innerHTML =
crashMulti.toFixed(2);



crashProfit =
Math.floor(
crashBet * crashMulti
);



document.getElementById("profit").innerHTML =
crashProfit.toLocaleString();





if(crashMulti >= crashLimit){


clearInterval(crashTimer);



document.getElementById("rocket").innerHTML=
"💥";



document.getElementById("history").innerHTML =
"هواپیما سقوط کرد ❌";


document.getElementById("profit").innerHTML=0;



crashPlaying=false;



}



},300);



}








function cashOut(){


if(!crashPlaying){

alert("پروازی فعال نیست");

return;

}




clearInterval(crashTimer);



addCoins(crashProfit);



document.getElementById("history").innerHTML =
"سود برداشت شد ✅";



alert(
"سود شما: "+
crashProfit+
" 🪙"
);



crashPlaying=false;



}