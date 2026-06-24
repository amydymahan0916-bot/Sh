let currentUser = 
JSON.parse(localStorage.getItem("currentUser"));



if(!currentUser){

alert("ابتدا وارد حساب شوید");

location.href="login.html";

}




document.getElementById("coins").innerHTML =

currentUser.coins.toLocaleString();







function sendWithdraw(){



let card =

document.getElementById("card").value.trim();




let money =

Number(
document.getElementById("money").value
);






if(!card || !money){


alert("همه اطلاعات را وارد کنید");

return;

}






if(money <= 0){


alert("مبلغ صحیح وارد کنید");

return;


}






if(money > currentUser.coins){


alert("موجودی کافی نیست");

return;


}






let requests =

JSON.parse(localStorage.getItem("withdrawRequests")) || [];







let request = {


id: Date.now(),


userId: currentUser.id,


user: currentUser.username,


card: card,


money: money,


status:"در انتظار تایید",


date: new Date().toLocaleString("fa-IR")



};







requests.push(request);






localStorage.setItem(

"withdrawRequests",

JSON.stringify(requests)

);






alert("درخواست برداشت ثبت شد");






document.getElementById("card").value="";

document.getElementById("money").value="";



showRequests();



}









function showRequests(){



let requests =

JSON.parse(localStorage.getItem("withdrawRequests")) || [];




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

💸 مبلغ:

${item.money.toLocaleString()}

تومان

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
