let risk = "normal";

let bet = 0;
let profit = 0;
let playing = false;

let selectedCards = [];
let totalMultiplier = 1;


// اتصال به موجودی سایت
let data = JSON.parse(localStorage.getItem("royalData")) || {

    coins:0,
    wins:0,
    games:0,
    record:0,
    history:[]

};



function save(){

    localStorage.setItem(
        "royalData",
        JSON.stringify(data)
    );

}



function update(){

    data =
    JSON.parse(localStorage.getItem("royalData")) || data;


    document.getElementById("coins").innerHTML =
    data.coins.toLocaleString();

}



update();





function setRisk(type){

    risk = type;

}





function startGame(){


    data =
    JSON.parse(localStorage.getItem("royalData")) || data;


    if(playing)
    return;



    bet =
    Number(
    document.getElementById("bet").value
    );



    if(!bet || bet < 10000){

        alert("حداقل ورود 10000 سکه است");
        return;

    }



    if(bet > data.coins){

        alert("موجودی کافی نیست");
        return;

    }



    data.coins -= bet;

    data.games++;


    profit = 0;

    selectedCards=[];

    totalMultiplier=1;


    playing=true;



    document.getElementById("betView").innerHTML =
    bet.toLocaleString();



    document.getElementById("profit").innerHTML =
    "0";



    document.getElementById("multi").innerHTML =
    "×1";




    let cards=[

        "BOMB",
        "BOMB",
        "POUCH",
        "×1.27",
        "×1.61",
        "×2"

    ];



    cards.sort(()=>Math.random()-0.5);



    let box =
    document.getElementById("cards");



    box.innerHTML="";



    cards.forEach((item)=>{


        box.innerHTML +=`

        <div class="card">

        <div class="inner"
        onclick="chooseCard(this,'${item}')">


        <div class="front">
        RG
        </div>


        <div class="back">
        ${item}
        </div>


        </div>

        </div>

        `;


    });



    document.getElementById("cashout").disabled=false;



    document.getElementById("message").innerHTML=
    "کارت انتخاب کنید";



    save();

    update();


}









function chooseCard(card,value){



    if(!playing)
    return;



    let parent =
    card.parentElement;



    if(parent.classList.contains("open"))
    return;



    parent.classList.add("open");





    if(value=="BOMB"){


        profit=0;


        playing=false;



        document.getElementById("cashout").disabled=true;



        document.getElementById("message").innerHTML=

        `
        💣 بمب خوردی

        <br>

        بازی تمام شد

        `;



        return;


    }






    if(value=="POUCH"){


        document.getElementById("message").innerHTML=
        "کارت پوچ بود";


        return;


    }







    let multi =
    Number(
    value.replace("×","")
    );



    selectedCards.push(multi);



    totalMultiplier *= multi;



    profit =
    Math.floor(
    bet * totalMultiplier
    );



    document.getElementById("multi").innerHTML=
    "×"+totalMultiplier.toFixed(2);



    document.getElementById("profit").innerHTML=
    profit.toLocaleString();




    parent.classList.add("win");




    let text="";



    selectedCards.forEach((x,i)=>{


        text +=

        `
        کارت ${i+1}: ×${x}
        <br>
        `;


    });



    document.getElementById("message").innerHTML=

    `

    برد موفق

    <br><br>

    ${text}

    <br>

    سود:
    ${profit.toLocaleString()} 🪙

    `;



}









function cashOut(){



    if(!playing)
    return;



    data =
    JSON.parse(localStorage.getItem("royalData")) || data;




    data.coins += profit;



    data.wins++;



    if(profit > data.record)

    data.record=profit;




    data.history.unshift(

    "استاد کارت : "+profit+" 🪙"

    );



    playing=false;



    document.getElementById("cashout").disabled=true;




    document.getElementById("message").innerHTML=

    `

    💰 برداشت موفق

    <br>

    ${profit.toLocaleString()} 🪙

    `;



    save();

    update();


}
