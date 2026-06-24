let data =
JSON.parse(localStorage.getItem("royalData")) || {

    coins:0,
    wins:0,
    games:0,
    record:0,
    history:[]

};





function updateProfile(){



data =
JSON.parse(localStorage.getItem("royalData")) || data;





document.getElementById("coins").innerHTML =

data.coins.toLocaleString();





document.getElementById("games").innerHTML =

data.games;





document.getElementById("wins").innerHTML =

data.wins;





document.getElementById("record").innerHTML =

data.record.toLocaleString();







// سطح کاربر

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





if(data.history.length == 0){


historyBox.innerHTML =

"هنوز بازی انجام نشده";


}

else{


historyBox.innerHTML="";



data.history.slice(0,10).forEach(item=>{



historyBox.innerHTML +=

`

<p>

${item}

</p>

`;



});


}




}





updateProfile();
