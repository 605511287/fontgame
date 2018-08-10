window.onload=function(){
  let btn=document.querySelectorAll(".btn")
  let audio=document.querySelector("audio")
  let flag=false;
//   键盘的点击
let name=""
  btn.forEach(function(value,index){
   
      value.ontouchstart=function(){
        if(flag==true){
          value.style.transform="scale(0.8)"
          name=value.innerText;
          fontGame.key(name);
        }
        else{
          return;
        }
       
      }
      value.ontouchend=function(){
        value.style.transform="scale(1)"
      }
  })
// 音乐
 let music =document.querySelector(".music");
 music.ontouchstart=function(){
     music.classList.toggle("open");
     music.classList.toggle("close");
     if(music.className=="music open"){
       audio.play();
     }
     else{
       audio.pause()
     }
     
 }
// 开始、暂停
let sw = document.querySelector(".switch");
sw.ontouchstart =function(){
  if(sw.className=="switch kai"){
    sw.className=("switch guan")
    fontGame.remove()
    flag=true;
  }
  else{
    sw.className=("switch kai");
    fontGame.pause();
    flag=false;
   
  }
}
// replay
let replay=document.querySelector(".replay");
console.log(replay);
replay.ontouchstart=function(){
  fontGame.chushi();
}


let fontGame= new Game;
let screen =document.querySelector(".screen");
let jianpan =document.querySelector(".jianbox");
let life =document.querySelector(".life");
let jifen =document.querySelector(".jifen");
let death=document.querySelector(".death");
let text=document.querySelector(".text");
fontGame.sw=sw;
fontGame.jifen=jifen;
fontGame.life=life; 
fontGame.text=text;
fontGame.screen=screen;
fontGame.jianpan=jianpan;
fontGame.replay=replay;
fontGame.death=death;
//  fontGame.creatletter(5);
 fontGame.remove();
//  fontGame.key();
 fontGame.chushi();
}