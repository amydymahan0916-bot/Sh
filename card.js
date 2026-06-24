let bet = 0;
let multi = 1;
let profit = 0;
let started = false;

let opened = [];



function startCard(){


bet = Number(document.getElementById("bet").value);



if(bet <= 0){

alert("مبلغ را وارد کنید");
return;

}



if(!removeCoins(bet)){

return;

}



multi = 1;
profit = 0;
opened = [];
started = true;



document.getElementById("multi").innerHTML = "1";
document.getElementById("profit").innerHTML = "0";

document.getElementById("history").innerHTML =
"یکی از کارت‌ها را انتخاب کن";



let cards = document.querySelectorAll(".card");

cards.forEach(card=>{

card.innerHTML="?";
card.classList.remove("open");

});


}





function openCard(id){


if(!started){

alert("اول بازی را شروع کن");
return;

}



if(opened.includes(id)) return;


opened.push(id);



let chance = Math.random();



let value;



if(chance < 0.15){

value="💣";

}else{

value="⭐";

}




let card =
document.querySelectorAll(".card")[id];



card.innerHTML=value;

card.classList.add("open");





if(value=="💣"){


document.getElementById("history").innerHTML =
"باختی";


started=false;

return;


}





multi++;


profit = bet * multi;



document.getElementById("multi").innerHTML =
multi;


document.getElementById("profit").innerHTML =
profit.toLocaleString();



document.getElementById("history").innerHTML =
"کارت بعدی را انتخاب کن";



}







function takeCardProfit(){


if(profit<=0){

alert("سودی وجود ندارد");
return;

}



addCoins(profit);


document.getElementById("history").innerHTML =
"سود دریافت شد";


started=false;


  }
