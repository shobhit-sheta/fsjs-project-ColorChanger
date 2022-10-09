let Canvas= document.getElementById('canvas');
const btn= document.getElementById('button');

const randColor = () =>{
    let num="0123456789ABCDEF";
    let hash="#";
    for(let i=0; i<6;i++){
        hash=hash+num[Math.floor(Math.random()*16)]
    }
    return hash;
}
function Color(){
Canvas.style.backgroundColor=randColor();
}
btn.addEventListener("click",Color)