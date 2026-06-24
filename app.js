let coins = localStorage.getItem("coins");


if(coins === null){

    coins = 39780;

    localStorage.setItem(
        "coins",
        coins
    );

}
else{

    coins = Number(coins);

}




function updateCoins(){

    document.querySelectorAll(".coin").forEach(item=>{

        item.innerHTML =
        "🪙 " + coins.toLocaleString();

    });

}




function removeCoins(amount){

    if(coins >= amount){

        coins -= amount;

        localStorage.setItem(
            "coins",
            coins
        );

        updateCoins();

        return true;

    }
    else{

        alert("سکه کافی ندارید");

        return false;

    }

}





function addCoins(amount){

    coins += amount;


    localStorage.setItem(
        "coins",
        coins
    );


    updateCoins();

}





document.addEventListener(
"DOMContentLoaded",
()=>{

    updateCoins();

});