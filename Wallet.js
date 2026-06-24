function calcPrice(){


let coins =
Number(document.getElementById("coins").value);



let price = coins;



document.getElementById("price").innerHTML =
price.toLocaleString();



}






function goPay(){



let coins =
Number(document.getElementById("coins").value);



if(coins < 10000){


alert("حداقل خرید 10000 سکه است");


return;


}



localStorage.setItem(
"buyCoins",
coins
);



localStorage.setItem(
"payPrice",
coins
);



window.location.href="payment.html";



}
