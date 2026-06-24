let bowlingBet = 0;

let bowlingProfit = 0;

let bowlingMulti = 1;

let bowlingPlaying = false;




function startBowling(){



bowlingBet =
Number(
document.getElementById("bet").value
);



if(bowlingBet<=0){

alert("مبلغ بازی را وارد کنید");

return;

}




if(!removeCoins(bowlingBet)){

return;

}



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
bowlingMulti;



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


}








function takeBowlingProfit(){


if(!bowlingPlaying){

alert("جایزه‌ای ندارید");

return;

}



addCoins(bowlingProfit);



alert(
"جایزه اضافه شد: "+
bowlingProfit+
" 🪙"
);



bowlingPlaying=false;


}