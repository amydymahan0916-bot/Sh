function login(){


let username =
document.getElementById("username").value.trim();



let password =
document.getElementById("password").value.trim();





let users =
JSON.parse(localStorage.getItem("users")) || [];





let user =
users.find(

u =>

u.username === username &&

u.password === password

);





if(!user){

alert("نام کاربری یا رمز اشتباه است");

return;

}





localStorage.setItem(

"currentUser",

JSON.stringify(user)

);





alert(

"خوش آمدید "+user.username

);





location.href="index.html";



}
