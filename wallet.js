let data =

JSON.parse(

localStorage.getItem("currentUser")

);



if(!data){

alert("ابتدا وارد حساب شوید");

location.href="login.html";

}








function saveUser(){



let users =

JSON.parse(localStorage.getItem("users")) || [];



let index = users.findIndex(

u=>u.id===data.id

);



if(index!==-1){

users[index]=data;

}



localStorage.setItem(

"users",

JSON.stringify(users)

);



localStorage.setItem(

"currentUser",

JSON.stringify(data)

);



}








function updateWallet(){



data =

JSON.parse(

localStorage.getItem("currentUser")

) || data;







document.getElementById("coins").innerHTML =

data.coins.toLocaleString();






document.getElementById("balance").innerHTML =

data.coins.toLocaleString();







let history =

document.getElementById("history");






if(!data.requests || data.requests.length==0){


history.innerHTML=

"درخواستی وجود ندارد";


}

else{


history.innerHTML="";





data.requests.slice().reverse().forEach(item=>{


history.innerHTML +=

`

<p>

${item.type}

<br>

مبلغ:

${item.amount.toLocaleString()}

<br>

وضعیت:

${item.status}

</p>

<hr>

`;


});



}




}






updateWallet();
