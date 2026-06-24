let data =

JSON.parse(localStorage.getItem("royalData")) || {

coins:0

};




document.getElementById("coins").innerHTML =

data.coins.toLocaleString();







function sendWithdraw(){



let card =

document.getElementById("card").value;



let money =

Number(document.getElementById("money").value);






if(!card || !money){


alert("همه اطلاعات را وارد کنید");

return;


}





if(money > data.coins){


alert("موجودی کافی نیست");

return;


}






let requests =

JSON.parse(localStorage.getItem("withdrawRequests")) || [];







requests.push({


user:"ماهان",


card:card,


money:money,


status:"در انتظار تایید"



});





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



if(requests.length===0){

box.innerHTML="درخواستی وجود ندارد";

return;

}





requests.forEach(item=>{


box.innerHTML += `


<p>

💸 ${item.money.toLocaleString()} تومان

<br>

وضعیت:
${item.status}

</p>

<hr>


`;


});


}



showRequests();
