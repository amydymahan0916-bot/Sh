// بازی استاد کارت -

let bet = 0;
let profit = 0;
let stage = 0;
let multiplier = 1;
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


const safeChance = [
75,
65,
50,
45,
40,
35,
25,
18
];





function startGame(){


bet = Number(
document.getElementById("bet").value
);



if(bet < 10000){

alert("حداقل ورود 10000 سکه است");
return;

}



let user =
JSON.parse(localStorage.getItem("user"));



if(!user || user.coins < bet){

alert("موجودی کافی نیست");
return;

}



user.coins -= bet;


localStorage.setItem(
"user",
JSON.stringify(user)
);



profit = bet;

stage = 0;

multiplier = 1;

playing = true;



document.getElementById("startBox").style.display="none";

document.getElementById("gameBox").style.display="block";



createCards();


}







function createCards(){


let box =
document.getElementById("cards");


box.innerHTML="";




let cards = [];



for(let i=0;i<6;i++){

cards.push("empty");

}



// سه کارت ضریب
let winPositions = [];

while(winPositions.length < 3){

let r = Math.floor(Math.random()*6);

if(!winPositions.includes(r)){

winPositions.push(r);

}

}



winPositions.forEach(i=>{

cards[i]="win";

});



// دو بمب
let bombCount = 0;


while(bombCount < 2){


let r = Math.floor(Math.random()*6);



if(cards[r]=="empty"){

cards[r]="bomb";

bombCount++;

}


}





cards.forEach(type=>{


let card =
document.createElement("div");


card.className="card";


card.innerHTML="🂠";



card.onclick=function(){

openCard(card,type);

};



box.appendChild(card);



});



updateInfo();


}








function openCard(card,type){



if(!playing)return;



if(card.classList.contains("open"))
return;




card.classList.add("open");





let chance =
safeChance[stage];



let random =
Math.floor(Math.random()*100)+1;




// شانس خوردن بمب واقعی

if(random > chance){



card.classList.add("bomb");

card.innerHTML="💣";



profit=0;


document.getElementById("profit").innerHTML="0";



loseGame();



return;


}






if(type=="bomb"){


card.classList.add("bomb");

card.innerHTML="💣";


loseGame();


return;


}







if(type=="empty"){


card.classList.add("empty");

card.innerHTML="❌";


return;


}







if(type=="win"){



card.classList.add("win");



let multi =
multipliers[stage];



multiplier*=multi;


profit =
Math.floor(bet * multiplier);



card.innerHTML =
"×"+multi;



stage++;



updateInfo();



if(stage>=8){


winGame();


return;


}



setTimeout(()=>{


createCards();


},700);



}



}








function cashOut(){



if(profit<=0)return;



let user =
JSON.parse(localStorage.getItem("user"));



if(user){


user.coins += profit;


localStorage.setItem(
"user",
JSON.stringify(user)
);


updateStats("win");


}



alert(
"برداشت شد: "+profit+" سکه"
);



playing=false;


}








function loseGame(){


let user =
JSON.parse(localStorage.getItem("user"));



if(user){

updateStats("lose");

}



playing=false;


alert(
"بمب خورد! سود از بین رفت"
);


}








function winGame(){


let user =
JSON.parse(localStorage.getItem("user"));



if(user){

user.coins += profit;


localStorage.setItem(
"user",
JSON.stringify(user)
);


updateStats("win");


}



playing=false;


alert(
"تبریک! برنده شدید"
);


}







function updateInfo(){


document.getElementById("level").innerHTML =
stage+1;


document.getElementById("multi").innerHTML =
multiplier.toFixed(2)+"×";


document.getElementById("profit").innerHTML =
profit.toLocaleString();



let user =
JSON.parse(localStorage.getItem("user"));



if(user){

document.getElementById("balance").innerHTML =
"🪙 "+user.coins.toLocaleString();

}


}
