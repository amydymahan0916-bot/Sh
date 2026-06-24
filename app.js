// سیستم اصلی کاربر

let currentUser =

JSON.parse(

localStorage.getItem("currentUser")

);



if(!currentUser){

currentUser = {

id: Date.now(),

username:"مهمان",

coins:0,

wins:0,

games:0,

record:0,

history:[]

};


localStorage.setItem(

"currentUser",

JSON.stringify(currentUser)

);

}







// ذخیره کاربر

function saveUser(){


localStorage.setItem(

"currentUser",

JSON.stringify(currentUser)

);



let users =

JSON.parse(

localStorage.getItem("users")

) || [];



let index = users.findIndex(

u=>u.id===currentUser.id

);



if(index !== -1){

users[index]=currentUser;

}

else{

users.push(currentUser);

}



localStorage.setItem(

"users",

JSON.stringify(users)

);



}








// آپدیت سکه در همه صفحات

function updateCoins(){



let coins = document.querySelectorAll("#coins");



coins.forEach(item=>{


item.innerHTML =

"🪙 "+

currentUser.coins.toLocaleString();



});



}








// کم کردن سکه

function removeCoins(amount){



if(currentUser.coins < amount){


alert("موجودی کافی نیست");

return false;


}



currentUser.coins -= amount;



saveUser();

updateCoins();



return true;


}









// اضافه کردن سکه

function addCoins(amount){



currentUser.coins += amount;



saveUser();

updateCoins();



}








// وقتی صفحه باز شد

updateCoins();
