function calcPrice(){


let coins =
Number(document.getElementById("coins").value);



document.getElementById("price").innerHTML =
coins.toLocaleString();



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



location.href="payment.html";


}
