let bet = 0;

let profit = 0;

let playing = false;

let stage = 0;

let totalMultiplier = 1;

let selectedCards = [];



const multipliers = [

1.27,
1.61,
2,
2.5,
3.2,
4.1,
5.2,
6.7

];



let data = JSON.parse(localStorage.getItem("royalData")) || {

coins:0,
wins:0,
games:0,
record:0,
history:[]

};





function save(){

localStorage.setItem(
"royalData",
JSON.stringify(data)
);

}




function update(){


data =
JSON.parse(localStorage.getItem("royalData")) || data;



document.getElementById("coins").innerHTML =
data.coins.toLocaleString();



}




update();








function startGame(){



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




data =
JSON.parse(localStorage.getItem("royalData")) || data;




if(bet > data.coins){

alert("موجودی کافی نیست");

return;

}





data.coins -= bet;


data.games++;



profit = bet;

stage = 0;

totalMultiplier = 1;

selectedCards=[];


playing=true;



document.getElementById("betView").innerHTML =
bet.toLocaleString();



document.getElementById("profit").innerHTML =
"0";



document.getElementById("multi").innerHTML =
"×1";




createCards();



save();

update();


}








function createCards(){


let box =
document.getElementById("cards");


box.innerHTML="";



let cards=[

"BOMB",
"BOMB",
"POUCH",
"×1.27",
"×1.61",
"×2"

];



cards.sort(()=>Math.random()-0.5);





cards.forEach((item)=>{


box.innerHTML += `


<div class="card">


<div class="inner"
onclick="chooseCard(this,'${item}')">



<div class="front">

RG

</div>



<div class="back">

${item}

</div>



</div>


</div>


`;


});



}





function chooseCard(card,value){



if(!playing)
return;



let parent =
card.parentElement;



if(parent.classList.contains("open"))
return;



parent.classList.add("open");





if(value=="BOMB"){



parent.classList.add("bomb");


profit=0;


playing=false;



document.getElementById("message").innerHTML=

`
💣 بمب خورد

<br>

سود از بین رفت
`;



return;


}





if(value=="POUCH"){



document.getElementById("message").innerHTML=

"کارت پوچ بود";

return;


}





let multi =
Number(
value.replace("×","")
);



selectedCards.push(multi);



totalMultiplier *= multi;



profit =
Math.floor(
bet * totalMultiplier
);





parent.classList.add("win");



document.getElementById("multi").innerHTML=

"×"+totalMultiplier.toFixed(2);



document.getElementById("profit").innerHTML=

profit.toLocaleString();





document.getElementById("message").innerHTML=

`

برد

<br><br>

${selectedCards.map((x,i)=>
"کارت "+(i+1)+" : ×"+x
).join("<br>")}


<br><br>

مجموع سود:

${profit.toLocaleString()} 🪙

`;





stage++;




if(stage>=8){


cashOut();


}



}








function cashOut(){



if(!playing)
return;




data =
JSON.parse(localStorage.getItem("royalData")) || data;




data.coins += profit;



data.wins++;



if(profit > data.record)

data.record = profit;




data.history.unshift(

"استاد کارت + "+profit+" 🪙"

);





playing=false;



document.getElementById("cashout").disabled=true;



save();


update();



document.getElementById("message").innerHTML=

`

💰 برداشت موفق

<br>

${profit.toLocaleString()} 🪙

`;



}
