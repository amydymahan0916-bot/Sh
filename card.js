let bet = 0;

let profit = 0;

let playing = false;

let totalMultiplier = 1;

let selectedCards = [];



let data = JSON.parse(
localStorage.getItem("currentUser")
);



function saveUser(){

localStorage.setItem(
"currentUser",
JSON.stringify(data)
);


let users = JSON.parse(
localStorage.getItem("users")
) || [];


let index = users.findIndex(
u=>u.id===data.id
);


if(index!=-1){

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



if(bet > data.coins){

alert("موجودی کافی نیست");

return;

}



data.coins -= bet;


data.games++;


profit = bet;

totalMultiplier = 1;

selectedCards=[];

playing=true;



saveUser();

update();



createCards();



}
