let turn=1,flag=1;
function change(box){
    if(box.innerText=="" && flag)
    {
        let turning='';
        if(turn){
            box.innerText='X';
            turning='0';
            turn=0;
        }
        else{ 
            box.innerText='0';
            turning='X';
            turn=1;
        }
        info.innerText=info.innerText.slice(0,-1)+turning;
        check();
    }
}
reset.onclick = () => {
    document.querySelectorAll(".box").forEach(e => e.innerText=""); 
    flag=1;
    let t = info.innerText;
    info.innerText="Turn for "+(t[0]==='T'?t[t.length-1]:t[0]);
    img.style.backgroundImage = '';
}
// const reset = () => document.querySelectorAll(".box").forEach(e => e.innerText="");
let boxtext=document.querySelectorAll(".box");
const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

]
const check = function() { 
    win.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[1]].innerText===boxtext[e[2]].innerText) && (boxtext[e[0]].innerText!=="")){
            let winner=boxtext[e[0]].innerText;
            info.innerText = winner+ " Won";
            flag=0;
            turn = (winner==='0'?0:1);
            img.style.backgroundImage = 'url(https://shorturl.at/etuIZ)';
        }
    })
};

const boxes=document.querySelectorAll(".box");
for(let box of boxes){
    box.addEventListener('click',()=>change(box));
    // box.onclick=()=>change(box);
}