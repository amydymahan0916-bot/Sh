function login(){


let username =

document.getElementById("username").value;



let password =

document.getElementById("password").value;





let users =

JSON.parse(localStorage.getItem("users")) || [];





let user = users.find(

u=>

u.username===username &&

u.password===password

);






if(!user){


alert("اطلاعات اشتباه است");

return;


}





localStorage.setItem(

"currentUser",

JSON.stringify(user)

);





alert("خوش آمدید "+username);



location.href="index.html";



}
