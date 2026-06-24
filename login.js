function login(){


let username =
document.getElementById("username").value.trim();


let password =
document.getElementById("password").value.trim();




if(username=="" || password==""){


alert("نام کاربری و رمز را وارد کنید");

return;


}






let users =

JSON.parse(

localStorage.getItem("users")

) || [];







let user =

users.find(

u =>

u.username === username &&

u.password === password

);







if(!user){


alert("اطلاعات اشتباه است");

return;


}








localStorage.setItem(

"currentUser",

JSON.stringify(user)

);






alert("ورود موفق");



location.href="index.html";



}
