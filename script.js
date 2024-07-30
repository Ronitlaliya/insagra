let button = document.querySelector("#btn");
let turnO = true;

button.addEventListener("click",() => {
    if(turnO){
        btn.innerText = "Following";
        turnO = false;
    }
    else{
        btn.innerText = "Follow";
        turnO = true;
    }
});