let data =

JSON.parse(

localStorage.getItem("currentUser")

);



if(!data){

alert("ابتدا وارد حساب شوید");

location.href="login.html";

}








function updateProfile(){



data =

JSON.parse(

localStorage.getItem("currentUser")

) || data;







document.getElementById("coins").innerHTML =

(data.coins || 0).toLocaleString();







document.getElementById("username").innerHTML =

data.username || "کاربر";








document.getElementById("games").innerHTML =

data.games || 0;







document.getElementById("wins").innerHTML =

data.wins || 0;







document.getElementById("record").innerHTML =

(data.record || 0).toLocaleString();










let level = 1;



if(data.games >= 10)

level=2;



if(data.games >= 25)

level=3;



if(data.games >= 50)

level=4;



if(data.games >= 100)

level=5;







document.getElementById("level").innerHTML =

level;









let historyBox =

document.getElementById("history");








if(!data.history || data.history.length===0){


historyBox.innerHTML =

"هنوز بازی انجام نشده";


}

else{



historyBox.innerHTML="";





data.history.slice(0,15).forEach(item=>{


historyBox.innerHTML +=

`

<p>

${item}

</p>

<hr>

`;



});



}





}





updateProfile();
