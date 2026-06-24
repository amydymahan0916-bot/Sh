let data =

JSON.parse(
localStorage.getItem("currentUser")
);



if(!data){

alert("ابتدا وارد حساب شوید");

location.href="login.html";

}







function saveUser(){


localStorage.setItem(

"currentUser",

JSON.stringify(data)

);



let users =

JSON.parse(
localStorage.getItem("users")
) || [];



let index = users.findIndex(

u=>u.id===data.id

);



if(index !== -1){

users[index]=data;

}



localStorage.setItem(

"users",

JSON.stringify(users)

);



}







function update(){



data =

JSON.parse(
localStorage.getItem("currentUser")
) || data;



let coin =

document.getElementById("coins");



if(coin){

coin.innerHTML =

data.coins.toLocaleString();

}



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







saveUser();

update();







setTimeout(()=>{



d1.classList.remove("rolling");

d2.classList.remove("rolling");

d3.classList.remove("rolling");





d1.innerHTML=getDice(dice1);

d2.innerHTML=getDice(dice2);

d3.innerHTML=getDice(dice3);







let total =

dice1+dice2+dice3;







document.getElementById("result").innerHTML=

total;







if(total >= 15){



let reward =

bet*2;





data.coins += reward;



data.wins++;







if(reward > data.record){

data.record = reward;

}







data.history.unshift(

"🎲 نبرد تاس + "+reward+" 🪙"

);







document.getElementById("profit").innerHTML=

reward.toLocaleString();






document.getElementById("message").innerHTML=

`

🎉 بردی

<br><br>

جمع تاس:

${total}

<br>

دریافت:

${reward.toLocaleString()} 🪙

`;





}

else{



document.getElementById("profit").innerHTML=

0;





document.getElementById("message").innerHTML=

`

💥 باختی

<br><br>

جمع تاس:

${total}

`;



}







saveUser();

update();





},1200);





}









function getDice(number){



let dice = {

1:"⚀",

2:"⚁",

3:"⚂",

4:"⚃",

5:"⚄",

6:"⚅"

};



return dice[number];


}
