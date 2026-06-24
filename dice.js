let data =
JSON.parse(localStorage.getItem("royalData")) || {

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








function rollDice(){



let bet =
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





document.getElementById("betView").innerHTML =
bet.toLocaleString();





let dice1 =
Math.floor(Math.random()*6)+1;


let dice2 =
Math.floor(Math.random()*6)+1;


let dice3 =
Math.floor(Math.random()*6)+1;






let d1 =
document.getElementById("dice1");


let d2 =
document.getElementById("dice2");


let d3 =
document.getElementById("dice3");





d1.classList.add("rolling");

d2.classList.add("rolling");

d3.classList.add("rolling");




d1.innerHTML="🎲";

d2.innerHTML="🎲";

d3.innerHTML="🎲";






setTimeout(()=>{



d1.classList.remove("rolling");

d2.classList.remove("rolling");

d3.classList.remove("rolling");




d1.innerHTML=getDice(dice1);

d2.innerHTML=getDice(dice2);

d3.innerHTML=getDice(dice3);





let total =
dice1+dice2+dice3;




document.getElementById("result").innerHTML =
total;






if(total >= 15){



let reward =
bet*2;



data.coins += reward;


data.wins++;



data.history.unshift(

"نبرد تاس + "+reward+" 🪙"

);




document.getElementById("profit").innerHTML =
reward.toLocaleString();




document.getElementById("message").innerHTML=

`
🎉 بردی

<br>

دریافت:
${reward.toLocaleString()} سکه

`;



}

else{



document.getElementById("profit").innerHTML =
0;



document.getElementById("message").innerHTML=

`
💥 باختی

<br>

جمع تاس:
${total}

`;



}





save();

update();




},1200);




}








function getDice(number){


let dice={

1:"⚀",
2:"⚁",
3:"⚂",
4:"⚃",
5:"⚄",
6:"⚅"

};


return dice[number];


}
