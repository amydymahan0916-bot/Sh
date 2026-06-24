let bet = 0;

let stage = 0;

let profit = 0;

let playing = false;


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



const chances = [

75,
65,
50,
45,
40,
35,
25,
18

];





function startCard(){


bet = Number(
document.getElementById("bet").value
);



if(bet < 10000){

alert("حداقل ورود 10000 سکه است");
return;

}



if(!removeCoins(bet)){

return;

}



stage = 0;

profit = bet;

playing = true;



document.getElementById("history").innerHTML =
"کارت را انتخاب کن";



document.getElementById("stage").innerHTML =
stage;



document.getElementById("multi").innerHTML =
"1";



document.getElementById("profit").innerHTML =
profit.toLocaleString();



createCards();


}








function createCards(){



let box = document.getElementById("cards");

box.innerHTML="";



for(let i=0;i<6;i++){


let card=document.createElement("div");


card.className="card";


card.innerHTML="❓";



card.onclick=function(){

selectCard(card);

};



box.appendChild(card);


}



}









function selectCard(card){



if(!playing) return;


let chance =
Math.random()*100;



let safe =
chances[stage];



let result;



if(chance <= safe){



let type =
Math.floor(Math.random()*3);



if(type==0){

result="⭐";

}else{

result="⭐";

}



}else{


result="💣";


}






card.innerHTML=result;


card.style.pointerEvents="none";






if(result=="💣"){


document.getElementById("history").innerHTML =
"💣 باختی! موجودی بازی صفر شد";


profit=0;


document.getElementById("profit").innerHTML="0";


playing=false;


return;


}







stage++;



profit =
Math.floor(bet * multipliers[stage-1]);




document.getElementById("stage").innerHTML =
stage;



document.getElementById("multi").innerHTML =
multipliers[stage-1];



document.getElementById("profit").innerHTML =
profit.toLocaleString();




if(stage>=8){


document.getElementById("history").innerHTML =
"🎉 تمام مراحل را بردی";


playing=false;


return;

}





document.getElementById("history").innerHTML =
"مرحله بعد آماده است";



setTimeout(()=>{

createCards();

},700);



}









function cashOut(){



if(!playing && profit<=0){

return;

}



if(profit>0){


addCoins(profit);



document.getElementById("history").innerHTML =
"سود دریافت شد";


}



playing=false;



}
