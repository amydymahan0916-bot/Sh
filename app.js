function getUser(){


return JSON.parse(

localStorage.getItem("currentUser")

);


}







function saveUser(user){



let users =

JSON.parse(localStorage.getItem("users")) || [];





let index =

users.findIndex(

u=>u.id===user.id

);





if(index !== -1){


users[index]=user;


}





localStorage.setItem(

"users",

JSON.stringify(users)

);





localStorage.setItem(

"currentUser",

JSON.stringify(user)

);



}








function updateCoins(){


let user=getUser();



if(!user) return;




let coinBox =

document.getElementById("coins");





if(coinBox){


coinBox.innerHTML =

user.coins.toLocaleString();


}



}






updateCoins();
