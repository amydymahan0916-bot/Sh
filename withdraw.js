let data =

JSON.parse(
localStorage.getItem("currentUser")
);



if(!data){

alert("ابتدا وارد حساب شوید");

location.href="login.html";

}







function saveUser(){


localStorage.setItem(

"currentUser",

JSON.stringify(data)

);



let users =

JSON.parse(

localStorage.getItem("users")

) || [];



let index = users.findIndex(

u=>u.id===data.id

);



if(index !== -1){

users[index]=data;

}



localStorage.setItem(

"users",

JSON.stringify(users)

);



}









function submitWithdraw(){



let card =

document.getElementById("card").value.trim();




let amount =

Number(

document.getElementById("amount").value

);








if(card.length < 16){


alert("شماره کارت صحیح وارد کنید");

return;


}







if(amount < 10000){


alert("حداقل برداشت 10000 سکه است");

return;


}







if(amount > data.coins){


alert("موجودی کافی نیست");

return;


}







if(!data.requests){


data.requests=[];


}








data.requests.push({


type:"برداشت",


card:card,


amount:amount,


status:"در انتظار تایید",


date:new Date().toLocaleString("fa")



});







saveUser();






alert("درخواست برداشت ثبت شد");



location.href="wallet.html";



}
