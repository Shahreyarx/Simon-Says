let gameSeq=[];
let userSeq=[];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;

let h3 = document.querySelector('h3');


document.addEventListener('keypress',function(){
    if(started == false){
        console.log("game is start");
        started = true;

        levelUp();
    }
})

function btnFlash(btn){
    btn.classList.add('flash')
    setTimeout(function(){
        btn.classList.remove('flash');
    },250);
}

function levelUp(){
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    //random btn choose
    btnFlash(randBtn);
}

function checkAns(idx){
    // console.log(level)
    // let idx = level-1;

    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    } else {
        h3.innerHTML = `Game Over ! <br> Your Score Is <b> ${level} </b>`;
        document.querySelector('body').style.backgroundColor = 'red';
        setTimeout(function(){
        document.querySelector('body').style.backgroundColor = 'white';
        },250);
        reset();
    }
}

function btnPress(){
    let btn = this;
    btnFlash(btn);
    // console.log(this);

    userColor = btn.getAttribute('id');
    console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener('click',btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}