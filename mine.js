let mineBet = 0;

let mineMulti = 1;

let mineProfit = 0;

let playingMine = false;

let mines = [];





function startMine(){


mineBet =
Number(
document.getElementById("bet").value
);



if(mineBet<=0){

alert("مبلغ بازی را وارد کنید");

return;

}




if(!removeCoins(mineBet)){

return;

}



playingMine=true;

mineMulti=1;

mineProfit=mineBet;



mines=[];



while(mines.length<3){

let x =
Math.floor(
Math.random()*9
);


if(!mines.includes(x)){

mines.push(x);

}

}





document.getElementById("multi").innerHTML=1;

document.getElementById("profit").innerHTML=
mineProfit;



document.getElementById("history").innerHTML=
"خانه‌ها را انتخاب کن 💎";





document.querySelectorAll(".mineCell")
.forEach(cell=>{

cell.innerHTML="?";

cell.style.background="#111";

});


}







function openCell(cell,index){



if(!playingMine){

alert("اول بازی را شروع کن");

return;

}



if(mines.includes(index)){


cell.innerHTML="💣";


cell.style.background="#700";



document.getElementById("history").innerHTML=
"مین پیدا شد! باخت ❌";



document.getElementById("profit").innerHTML=0;


playingMine=false;



}

else{


cell.innerHTML="💎";



mineMulti++;


mineProfit =
mineBet * mineMulti;



document.getElementById("multi").innerHTML=
mineMulti;



document.getElementById("profit").innerHTML=
mineProfit.toLocaleString();



}


}







function takeMineProfit(){


if(!playingMine){

alert("جایزه‌ای ندارید");

return;

}



addCoins(mineProfit);



alert(
"جایزه اضافه شد: "+
mineProfit+
" 🪙"
);



playingMine=false;


}