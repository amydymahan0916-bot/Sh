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









function submitCharge(){



let amount =

Number(

document.getElementById("amount").value

);






if(amount < 10000){


alert("حداقل شارژ 10000 سکه است");

return;


}








if(!data.requests){


data.requests=[];


}








data.requests.push({


type:"شارژ",


amount:amount,


status:"در انتظار تایید",


date:new Date().toLocaleString("fa")



});








saveUser();







alert("درخواست شارژ ثبت شد");





location.href="wallet.html";



}
