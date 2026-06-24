// سیستم سکه شرط‌بندی ماهان


let coins = localStorage.getItem("mahanCoins");


if(coins === null){

coins = 10000;

localStorage.setItem(
"mahanCoins",
coins
);

}



function getCoins(){

return Number(
localStorage.getItem("mahanCoins")
);

}





function showCoins(){


let elements =
document.querySelectorAll(".coin");


elements.forEach(item=>{

item.innerHTML =
"🪙 " +
getCoins().toLocaleString();

});


}




function addCoins(amount){


let current =
getCoins();


current += Number(amount);



localStorage.setItem(
"mahanCoins",
current
);



showCoins();


}







function removeCoins(amount){


let current =
getCoins();



if(current < amount){


alert(
"سکه کافی ندارید"
);


return false;


}



current -= Number(amount);



localStorage.setItem(
"mahanCoins",
current
);



showCoins();



return true;


}







function copyCard(){


let card =
"6037997194784360";


navigator.clipboard.writeText(card);



alert(
"شماره کارت کپی شد"
);



}







function paymentDone(){



alert(
"پرداخت شما برای پشتیبانی ارسال گردید، در اسرع وقت حساب شما شارژ میشود."
);



}







window.onload=function(){


showCoins();


}
