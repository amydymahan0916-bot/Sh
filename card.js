let money = 0;

let bet = 0;

let profit = 0;

let currentMulti = 1;

let stage = 0;

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





function setMode(mode){

console.log(mode);

}





function startGame(){


let amount = Number(document.getElementById("amount").value);



if(amount < 10000){

alert("حداقل مبلغ بازی 10000 است");

return;

}



bet = amount;

profit = amount;

currentMulti = 1;

stage = 0;

playing=true;



document.getElementById("bet").innerHTML=bet;

document.getElementById("profit").innerHTML=profit;

document.getElementById("multi").innerHTML="1×";


createCards();


}







function createCards(){


let box=document.getElementById("cards");

box.innerHTML="";



let cards=[
"bomb",
"bomb",
"pouch",
multipliers[stage],
"empty",
"empty"
];



cards.sort(()=>Math.random()-0.5);



cards.forEach(item=>{


let div=document.createElement("div");


div.className="card";


div.innerHTML="RG";



div.onclick=function(){


if(!playing)return;



openCard(div,item);


}



box.appendChild(div);



});



}







function openCard(card,type){



if(card.classList.contains("open"))return;



card.classList.add("open");



if(type==="bomb"){


card.classList.add("bomb");

card.innerHTML="BOMB 💣";



profit=0;


document.getElementById("profit").innerHTML=0;


document.getElementById("resultTitle").innerHTML=
"باخت 💣";


document.getElementById("resultText").innerHTML=
"بمب خورد، سود از بین رفت";



playing=false;

return;

}





if(type==="pouch"){


card.innerHTML="POUCH";


return;

}





if(type==="empty"){


card.innerHTML="RG";


return;

}





card.innerHTML=type+"×";



currentMulti*=Number(type);


profit=Math.floor(bet*currentMulti);



document.getElementById("multi").innerHTML=
currentMulti.toFixed(2)+"×";


document.getElementById("profit").innerHTML=
profit;



document.getElementById("resultTitle").innerHTML=
"برد ✨";


document.getElementById("resultText").innerHTML=
`
کارت ${stage+1}: ${type}×
<br>
ضریب فعلی: ${currentMulti.toFixed(2)}×
<br>
سود: 🪙 ${profit}
`;




stage++;



if(stage<8){

setTimeout(()=>{

createCards();

},700);


}else{


playing=false;


}




}








function cashout(){



if(profit>0){


money+=profit;


document.getElementById("money").innerHTML=money;


document.getElementById("resultText").innerHTML=
`
برداشت موفق 💰
<br>
🪙 ${profit}
`;



playing=false;



}

}








function resetGame(){


stage=0;

profit=0;

currentMulti=1;

playing=false;



document.getElementById("cards").innerHTML="";

document.getElementById("profit").innerHTML=0;

document.getElementById("multi").innerHTML="1×";


}
