let data =
JSON.parse(localStorage.getItem("royalData")) || {

    coins:0,
    wins:0,
    games:0,
    record:0,
    history:[]

};




let withdraws =

JSON.parse(localStorage.getItem("withdrawRequests")) || [];







function update(){



data =
JSON.parse(localStorage.getItem("royalData")) || data;




document.getElementById("list").innerHTML="";



let list =
document.getElementById("list");




if(withdraws.length == 0){


list.innerHTML =
"درخواستی وجود ندارد";


return;


}





withdraws.forEach(item=>{



list.innerHTML +=

`

<div class="request-box">


<p>

💳 کارت:

${item.card}

</p>



<p>

💰 مبلغ:

${item.money.toLocaleString()}

تومان

</p>




<p>

وضعیت:

${item.status}

</p>



</div>


`;



});




}









function sendWithdraw(){



let card =

document.getElementById("card").value;





let money =

Number(
document.getElementById("money").value
);






if(card.length !== 16){


alert("شماره کارت صحیح نیست");

return;


}







if(!money || money < 10000){


alert("حداقل برداشت 10000 تومان است");

return;


}








let request = {



id:Date.now(),



user:"ماهان",



card:card,



money:money,



status:"در انتظار تایید"



};







withdraws.push(request);






localStorage.setItem(

"withdrawRequests",

JSON.stringify(withdraws)

);







document.getElementById("card").value="";

document.getElementById("money").value="";





alert("درخواست برداشت ثبت شد");



update();



}








update();
