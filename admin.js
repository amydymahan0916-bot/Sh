const ADMIN_PASSWORD = "123456";



let requests =

JSON.parse(localStorage.getItem("walletRequests")) || [];






function loginAdmin(){



let pass =

document.getElementById("adminPass").value;





if(pass !== ADMIN_PASSWORD){


alert("رمز اشتباه است");

return;


}





document.getElementById("loginBox").style.display="none";


document.getElementById("panel").style.display="block";



showRequests();



}









function showRequests(){



requests =

JSON.parse(localStorage.getItem("walletRequests")) || [];





let box =

document.getElementById("requests");





if(requests.length===0){


box.innerHTML=

"درخواستی وجود ندارد";


return;


}





box.innerHTML="";







requests.forEach((item,index)=>{



box.innerHTML +=

`

<div class="request-box">



<h3>

👤 ${item.user}

</h3>




<p>

🪙 مقدار درخواست:

${item.coins.toLocaleString()}

</p>




<p>

وضعیت:

${item.status}

</p>





<button onclick="acceptRequest(${index})">

✅ تایید

</button>





<button onclick="rejectRequest(${index})">

❌ رد

</button>



</div>


`;



});




}









function acceptRequest(index){



let request = requests[index];





if(request.status !== "در انتظار تایید"){


alert("این درخواست قبلاً بررسی شده");

return;


}






let data =

JSON.parse(localStorage.getItem("royalData")) || {


coins:0,

wins:0,

games:0,

record:0,

history:[]

};






data.coins += request.coins;





data.history.unshift(

"تایید پرداخت + "+

request.coins+

" 🪙"

);






localStorage.setItem(

"royalData",

JSON.stringify(data)

);






request.status="تایید شده";






localStorage.setItem(

"walletRequests",

JSON.stringify(requests)

);





alert("سکه اضافه شد");



showRequests();



}









function rejectRequest(index){



requests[index].status="رد شده";





localStorage.setItem(

"walletRequests",

JSON.stringify(requests)

);





alert("درخواست رد شد");



showRequests();



  }
