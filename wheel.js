let wheelBet = 0;

let wheelProfit = 0;

let wheelMulti = 1;

let wheelPlaying = false;




function spinWheel(){



wheelBet =
Number(
document.getElementById("bet").value
);



if(wheelBet <= 0){

alert("مبلغ بازی را وارد کنید");

return;

}



if(!removeCoins(wheelBet)){

return;

}




wheelPlaying = true;




let rewards = [


{
name:"باخت",
multi:0
},


{
name:"برگشت",
multi:1
},


{
name:"جایزه کوچک",
multi:2
},


{
name:"جایزه خوب",
multi:5
},


{
name:"جایزه ویژه",
multi:10
}


];



let result =
rewards[
Math.floor(
Math.random()*rewards.length
)
];





document.getElementById("wheel").innerHTML =
"🎡";



document.getElementById("reward").innerHTML =
result.name;



wheelMulti =
result.multi;



document.getElementById("multi").innerHTML =
wheelMulti;




if(wheelMulti > 0){


wheelProfit =
wheelBet * wheelMulti;



document.getElementById("profit").innerHTML =
wheelProfit.toLocaleString();



document.getElementById("history").innerHTML =

"نتیجه: "+
result.name+
"<br>ضریب ×"+
wheelMulti;


}

else{


wheelProfit=0;


document.getElementById("profit").innerHTML=0;



document.getElementById("history").innerHTML =

"گردونه خراب شد ❌";


wheelPlaying=false;


}



}







function takeWheelProfit(){


if(!wheelPlaying){

alert("جایزه‌ای ندارید");

return;

}



addCoins(wheelProfit);



alert(
"جایزه اضافه شد: "+
wheelProfit+
" 🪙"
);



wheelPlaying=false;


}