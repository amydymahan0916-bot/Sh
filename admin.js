const ADMIN_PASSWORD="4200821461";





function loginAdmin(){


let pass =
document.getElementById("adminPass").value;



if(pass !== ADMIN_PASSWORD){

alert("رمز اشتباه است");
return;

}



document.getElementById("loginBox").style.display="none";

document.getElementById("panel").style.display="block";


showAll();


}







function showAll(){

showCharge();

showWithdraw();

}








// درخواست شارژ


function showCharge(){


let requests =
JSON.parse(localStorage.getItem("walletRequests")) || [];



let box =
document.getElementById("chargeRequests");



box.innerHTML="";



if(requests.length==0){

box.innerHTML="درخواستی نیست";

return;

}





requests.forEach((item,index)=>{


box.innerHTML+=`


<div class="request-box">


<h3>
👤 ${item.user}
</h3>


<p>
🪙 ${item.coins.toLocaleString()} سکه
</p>


<p>
${item.status}
</p>



<button onclick="acceptCharge(${index})">

✅ تایید

</button>



<button onclick="rejectCharge(${index})">

❌ رد

</button>



</div>


`;


});


}









function acceptCharge(index){



let requests =
JSON.parse(localStorage.getItem("walletRequests")) || [];



let data =
JSON.parse(localStorage.getItem("royalData")) || {

coins:0,
wins:0,
games:0,
record:0,
history:[]

};




let req=requests[index];




data.coins += req.coins;




data.history.unshift(

"شارژ تایید شد + "+
req.coins+
" 🪙"

);




localStorage.setItem(
"royalData",
JSON.stringify(data)
);





req.status="تایید شده";



localStorage.setItem(

"walletRequests",

JSON.stringify(requests)

);



showCharge();



}







function rejectCharge(index){


let requests =
JSON.parse(localStorage.getItem("walletRequests")) || [];



requests[index].status="رد شده";



localStorage.setItem(

"walletRequests",

JSON.stringify(requests)

);



showCharge();


}









// برداشت ها


function showWithdraw(){


let requests =
JSON.parse(localStorage.getItem("withdrawRequests")) || [];



let box =
document.getElementById("withdrawRequests");



box.innerHTML="";



if(requests.length==0){

box.innerHTML="درخواستی نیست";

return;

}





requests.forEach((item,index)=>{



box.innerHTML+=`


<div class="request-box">


<h3>

👤 ${item.user}

</h3>



<p>

💳 ${item.card}

</p>



<p>

💰 ${item.money.toLocaleString()} تومان

</p>



<p>

${item.status}

</p>




<button onclick="acceptWithdraw(${index})">

✅ پرداخت شد

</button>



<button onclick="rejectWithdraw(${index})">

❌ رد

</button>



</div>



`;



});


}









function acceptWithdraw(index){



let requests =
JSON.parse(localStorage.getItem("withdrawRequests")) || [];



let data =
JSON.parse(localStorage.getItem("royalData")) || {

coins:0,
wins:0,
games:0,
record:0,
history:[]

};





let req=requests[index];



let coins=req.money;



if(data.coins < coins){


alert("موجودی کافی نیست");

return;


}




data.coins -= coins;



data.history.unshift(

"برداشت تایید شد - "+
coins+
" 🪙"

);





localStorage.setItem(

"royalData",

JSON.stringify(data)

);





req.status="تایید شده";



localStorage.setItem(

"withdrawRequests",

JSON.stringify(requests)

);



showWithdraw();


}









function rejectWithdraw(index){


let requests =
JSON.parse(localStorage.getItem("withdrawRequests")) || [];



requests[index].status="رد شده";



localStorage.setItem(

"withdrawRequests",

JSON.stringify(requests)

);



showWithdraw();


  }
