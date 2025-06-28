let count = 0;
let winarray = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let btn = document.querySelectorAll(".btn");
let check = btn.forEach( val =>{
    val.addEventListener("click",()=>{
    if (val.innerText === ""){
        if (count %2 == 0){
            val.innerText = "O";
        }else{
            val.innerText = "X";
        }
    }
    count++;
    val.disabled = true;
    win();
    })
});

function win (){
    let winnerFound = false;
    for (let pattern of winarray){
        let [a,b,c] = pattern;
        if ((btn[a].innerText !="") && 
        (btn[a].innerText == btn[b].innerText) && 
        (btn[b].innerText == btn[c].innerText)){
            winnerFound = true;
            setTimeout(()=>{
            btn.forEach(val => val.disabled = true);
            document.querySelector(".winstatement").innerText = `Congratulations on winning ${btn[a].innerText}`;
            document.querySelector(".dis").style.display = "flex";
            document.querySelector(".reset").style.display = "none";
            },50);
            break;
        }if (!winnerFound && count === 9) {
        setTimeout(() => {
            btn.forEach(val => val.disabled = true);
            document.querySelector(".winstatement").innerText = `Tough Battle. Try again!`;
            document.querySelector(".dis").style.display = "flex";
            document.querySelector(".reset").style.display = "none";
        }, 50);
    }

    }
}
document.querySelector(".reset").addEventListener("click",()=>{
    count = 0;
        for (let pat of btn){
        if (pat.innerText !="" || pat.innerText == ""){
            pat.innerText ="";
            pat.disabled = false;
        }
}
})

document.querySelector(".newgamebtn").addEventListener("click",()=>{
    count = 0;
        for (let pat of btn){
        if (pat.innerText !="" || pat.innerText == "" ){
            pat.innerText ="";
            pat.disabled = false;
            document.querySelector(".dis").style.display = "none";
            document.querySelector(".reset").style.display = "block";

        }
}
})

