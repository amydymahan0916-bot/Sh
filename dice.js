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



if(!bet || bet < 10000){

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





let d1 =
Math.floor(Math.random()*6)+1;


let d2 =
Math.floor(Math.random()*6)+1;


let d3 =
Math.floor(Math.random()*6)+1;





let dice1 =
document.getElementById("dice1");


let dice2 =
document.getElementById("dice2");


let dice3 =
document.getElementById("dice3");





dice1.classList.add("roll");

dice2.classList.add("roll");

dice3.classList.add("roll");




setTimeout(()=>{



dice1.classList.remove("roll");

dice2.classList.remove("roll");

dice3.classList.remove("roll");




dice1.innerHTML =
getDice(d1);


dice2.innerHTML =
getDice(d2);


dice3.innerHTML =
getDice(d3);






let total =
d1+d2+d3;




document.getElementById("betView").innerHTML =
bet.toLocaleString();



document.getElementById("result").innerHTML =
total;



if(total >= 15){



let reward =
bet*2;



data.coins += reward;


data.wins++;



if(reward > data.record)

data.record = reward;




data.history.unshift(

"نبرد تاس + "+reward+" 🪙"

);





document.getElementById("profit").innerHTML =
reward.toLocaleString();




document.getElementById("message").innerHTML=

`
🎉 بردی

<br>

جمع تاس:
${total}

<br>

دریافت:
${reward.toLocaleString()} 🪙

`;



}

else{



document.getElementById("profit").innerHTML =
0;



document.getElementById("message").innerHTML=

`
💥 باخت

<br>

جمع تاس:
${total}

<br>

پول از بین رفت

`;



}





save();

update();



},1000);



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
