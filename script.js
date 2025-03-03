let gameseq=[];
let userseq=[];
let btns=["red","yellow","aqua","pink"];
let started=false;
let level=0;
let h2=document.querySelector("h2")
document.addEventListener("keypress",function(){
    if(started==false)
    {
        started=true;
        levelup();
    }
    
});
function gameflash(btn)
{
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}
function userflash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250)
}
function levelup()
{
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randidx=Math.floor(Math.random()*3);
    let randclr=btns[randidx];
    let randbtn=document.querySelector(`.${randclr}`);
    gameseq.push(randclr);
    gameflash(randbtn);
}
function check(idx){
    
    if(userseq[idx]==gameseq[idx])
    {
        if(userseq.length==gameseq.length)
        {
           setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML=`Game over! <b>your score is</b> ${level} `;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
        reset();
    }
}
function btnpress()
{
    let btn=this;
    userflash(btn);
    userclr=btn.getAttribute("id");
    userseq.push(userclr);

    check(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns)
{
    btn.addEventListener("click",btnpress);
}

function reset()
{
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}