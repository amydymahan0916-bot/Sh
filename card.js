let bet = 0;
let multiplier = 1;
let profit = 0;
let playing = false;
let cardCount = 0;




function startGame(){


bet = Number(
document.getElementById("bet").value
);



if(bet <= 0){

alert("مبلغ بازی را وارد کنید");

return;

}



if(!removeCoins(bet)){

return;

}



multiplier = 1;

profit = bet;

cardCount = 0;

playing = true;




document.getElementById("multi").innerHTML =
multiplier;



document.getElementById("profit").innerHTML =
profit.toLocaleString();




document.getElementById("history").innerHTML =
"بازی شروع شد<br>کارت انتخاب کن 🃏";





document.querySelectorAll(".card").forEach(card=>{

card.innerHTML="🂠";

card.classList.remove("open");

});


}







function pickCard(card){



if(!playing){

alert("اول بازی را شروع کن");

return;

}




cardCount++;




let win = Math.random() > 0.35;



card.classList.add("open");




if(win){



multiplier++;


profit = bet * multiplier;



card.innerHTML="⭐";



document.getElementById("multi").innerHTML =
multiplier;



document.getElementById("profit").innerHTML =
profit.toLocaleString();




document.getElementById("history").innerHTML +=

"<br>کارت "+cardCount+
" موفق ✔️ ضریب ×"+
multiplier;



}

else{


card.innerHTML="💀";



document.getElementById("history").innerHTML +=

"<br>کارت "+cardCount+
" باخت ❌";



document.getElementById("profit").innerHTML=0;



playing=false;


}



}






function takeProfit(){



if(!playing){

alert("بازی فعالی ندارید");

return;

}



addCoins(profit);



document.getElementById("history").innerHTML +=

"<br>سود برداشت شد ✅";



alert(
"سود شما اضافه شد: "+profit+" 🪙"
);



playing=false;



}