function register(){


let username =
document.getElementById("username").value;



let password =
document.getElementById("password").value;





if(!username || !password){

alert("همه فیلدها را پر کنید");

return;

}





let users =

JSON.parse(localStorage.getItem("users")) || [];






let exist = users.find(

u=>u.username===username

);






if(exist){

alert("این نام کاربری قبلا ثبت شده");

return;

}







let newUser = {


username:username,


password:password,


coins:100000,


wins:0,


games:0,


record:0,


history:[]


};






users.push(newUser);






localStorage.setItem(

"users",

JSON.stringify(users)

);






alert("ثبت نام موفق");



location.href="login.html";



}
