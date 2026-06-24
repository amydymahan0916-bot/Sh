const ADMIN_PASSWORD = "123456";




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







// =====================
// شارژ ها
// =====================


function showCharge(){



let requests =

JSON.parse(localStorage.getItem("walletRequests")) || [];



let box =

document.getElementById("chargeRequests");



box.innerHTML="";



if(requests.length===0){

box.innerHTML="درخواستی نیست";

return;

}





requests.forEach((item,index)=>{



box.innerHTML += `


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



let request = requests[index];






let users =

JSON.parse(localStorage.getItem("users")) || [];






let userIndex = users.findIndex(

u=>u.id === request.userId

);






if(userIndex === -1){

alert("کاربر پیدا نشد");

return;

}







users[userIndex].coins += request.coins;







users[userIndex].history.unshift(

"شارژ تایید شد +"+request.coins+" 🪙"

);







localStorage.setItem(

"users",

JSON.stringify(users)

);







request.status="تایید شده";






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









// =====================
// برداشت ها
// =====================


function showWithdraw(){



let requests =

JSON.parse(localStorage.getItem("withdrawRequests")) || [];



let box =

document.getElementById("withdrawRequests");



box.innerHTML="";



if(requests.length===0){

box.innerHTML="درخواستی نیست";

return;

}







requests.forEach((item,index)=>{


box.innerHTML += `


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



let request = requests[index];





let users =

JSON.parse(localStorage.getItem("users")) || [];





let userIndex = users.findIndex(

u=>u.id === request.userId

);






if(userIndex === -1){

alert("کاربر پیدا نشد");

return;

}





if(users[userIndex].coins < request.money){

alert("موجودی کاربر کافی نیست");

return;

}





users[userIndex].coins -= request.money;






users[userIndex].history.unshift(

"برداشت تایید شد -"+request.money+" 🪙"

);






localStorage.setItem(

"users",

JSON.stringify(users)

);






request.status="تایید شده";






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
