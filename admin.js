let users = JSON.parse(
localStorage.getItem("users")
) || [];



function saveUsers(){

localStorage.setItem(
"users",
JSON.stringify(users)
);

}




function showUsers(){


let box = document.getElementById("users");


if(!box) return;



box.innerHTML="";



users.forEach((user,index)=>{


box.innerHTML += `

<div class="box">

<h3>
${user.username || "بدون نام"}
</h3>


<p>
🪙 موجودی:
${(user.coins || 0).toLocaleString()}
</p>


<p>
🎮 بازی:
${user.games || 0}
</p>


<p>
🏆 برد:
${user.wins || 0}
</p>



<button onclick="addCoin(${index})">
+10000 سکه
</button>


<button onclick="removeCoin(${index})">
-10000 سکه
</button>


</div>

`;



});



}






function showRequests(){


let box = document.getElementById("requests");


if(!box) return;



box.innerHTML="";


let found=false;



users.forEach((user)=>{


if(user.requests){


user.requests.forEach((req,index)=>{


if(req.status=="در انتظار تایید"){


found=true;


box.innerHTML += `

<div class="box">


<h3>
${user.username}
</h3>


<p>
نوع:
${req.type}
</p>


<p>
مبلغ:
${req.amount.toLocaleString()}
</p>


<button onclick="acceptRequest('${user.id}',${index})">
تایید
</button>


<button onclick="rejectRequest('${user.id}',${index})">
رد
</button>


</div>

`;

}


});


}


});



if(!found){

box.innerHTML="درخواستی وجود ندارد";

}



}






function acceptRequest(id,index){


let user = users.find(
u=>u.id==id
);



if(!user) return;



let req=user.requests[index];



if(req.status!="در انتظار تایید")
return;



if(req.type=="شارژ"){


user.coins += req.amount;


}



if(req.type=="برداشت"){


if(user.coins >= req.amount){


user.coins -= req.amount;


}

else{

alert("موجودی کافی نیست");

return;

}


}



req.status="تایید شد";



saveUsers();


showUsers();

showRequests();



}






function rejectRequest(id,index){


let user = users.find(
u=>u.id==id
);



if(user){


user.requests[index].status="رد شد";


}



saveUsers();


showRequests();



}







function addCoin(index){


users[index].coins += 10000;


saveUsers();


showUsers();



}







function removeCoin(index){


if(users[index].coins >=10000){


users[index].coins -=10000;


}


saveUsers();


showUsers();


}





showUsers();

showRequests();
