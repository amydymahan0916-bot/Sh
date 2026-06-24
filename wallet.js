let data =
JSON.parse(localStorage.getItem("royalData")) || {

    coins:0,
    wins:0,
    games:0,
    record:0,
    history:[]

};





let requests =

JSON.parse(localStorage.getItem("walletRequests")) || [];







function update(){



data =
JSON.parse(localStorage.getItem("royalData")) || data;




document.getElementById("coins").innerHTML =

data.coins.toLocaleString();




showRequests();


}








function sendRequest(){



let amount =

Number(
document.getElementById("amount").value
);





if(!amount || amount < 10000){


alert("حداقل درخواست 10000 سکه است");

return;


}






let request = {



id: Date.now(),



user:"ماهان",



coins:amount,



status:"در انتظار تایید"



};






requests.push(request);






localStorage.setItem(

"walletRequests",

JSON.stringify(requests)

);






document.getElementById("amount").value="";



alert("درخواست ثبت شد");



showRequests();


}









function showRequests(){



let box =

document.getElementById("requests");





if(requests.length==0){


box.innerHTML=

"درخواستی وجود ندارد";


return;


}





box.innerHTML="";







requests.forEach(item=>{



box.innerHTML +=



`

<div class="request-box">


<p>

🪙 ${item.coins.toLocaleString()} سکه

</p>


<p>

وضعیت:

${item.status}

</p>



</div>


`;



});





}






update();
