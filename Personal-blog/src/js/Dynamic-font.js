// 动态字体
let msg = "學如逆水行舟，不進則退";
let i = 0;
const play = () =>{
    if(i <= msg.length){
        let text = document.getElementById("subtitle");
        text.innerText = msg.substring(0, i);
        setTimeout("play()", 200);
        i++;
    }else {
        i = 0;
        setTimeout("play()", 1000);
    }
}

play();