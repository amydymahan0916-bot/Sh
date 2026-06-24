let currentUser = 
JSON.parse(localStorage.getItem("currentUser"));



if(!currentUser){

alert("ابتدا وارد حساب شوید");

location.href="login.html";

}





document.getElementById("coins").innerHTML =

currentUser.coins.toLocaleString();








function copyCard(){



let card =

document.getElementById("cardNumber").innerText;



navigator.clipboard.writeText(card);



alert("شماره کارت کپی شد");


}








function sendCharge(){



let amount =

Number(
document.getElementById("amount").value
);






if(!amount || amount < 10000){


alert("حداقل شارژ 10000 سکه است");

return;


}







let requests =

JSON.parse(localStorage.getItem("walletRequests")) || [];







let request = {


id:Date.now(),


userId:currentUser.id,


user:currentUser.username,


coins:amount,


status:"در انتظار تایید",


date:new Date().toLocaleString("fa-IR")



};







requests.push(request);






localStorage.setItem(

"walletRequests",

JSON.stringify(requests)

);







alert("درخواست شارژ ثبت شد");



document.getElementById("amount").value="";



showRequests();



}









function showRequests(){



let requests =

JSON.parse(localStorage.getItem("walletRequests")) || [];




let box =

document.getElementById("requests");






box.innerHTML="";







let myRequests = requests.filter(

item => item.userId === currentUser.id

);






if(myRequests.length===0){


box.innerHTML="درخواستی وجود ندارد";

return;


}







myRequests.forEach(item=>{


box.innerHTML += `


<div class="request-box">


<p>

🪙 مقدار:

${item.coins.toLocaleString()}

سکه

</p>



<p>

وضعیت:

${item.status}

</p>



<p>

تاریخ:

${item.date}

</p>


</div>


`;



});



}







showRequests();
