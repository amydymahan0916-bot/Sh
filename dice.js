let diceBet = 0;

let diceProfit = 0;

let diceMulti = 1;

let dicePlaying = false;




function startDice(){



diceBet =
Number(
document.getElementById("bet").value
);



if(diceBet <= 0){

alert("مبلغ بازی را وارد کنید");

return;

}



if(!removeCoins(diceBet)){

return;

}



dicePlaying = true;



let number =
Math.floor(Math.random()*6)+1;



document.getElementById("dice").innerHTML =
"🎲 "+number;



document.getElementById("result").innerHTML =
number;



if(number == 6){


diceMulti = 10;


}

else if(number >= 4){


diceMulti = 3;


}

else if(number >= 2){


diceMulti = 1.5;


}

else{


diceMulti = 0;


}






if(diceMulti > 0){


diceProfit =
diceBet * diceMulti;



document.getElementById("profit").innerHTML =
diceProfit.toLocaleString();



document.getElementById("multi").innerHTML =
diceMulti;



document.getElementById("history").innerHTML =

"عدد تاس: "+number+
"<br>برد ✔️";


}

else{


document.getElementById("profit").innerHTML=0;


document.getElementById("history").innerHTML =

"عدد تاس: "+number+
"<br>باخت ❌";


dicePlaying=false;


}



}








function takeDiceProfit(){


if(!dicePlaying){

alert("بازی فعالی ندارید");

return;

}



addCoins(diceProfit);



alert(
"سود شما اضافه شد: "+
diceProfit+
" 🪙"
);



dicePlaying=false;


}