(()=>{"use strict";const t=new class{constructor(){this.hole=document.querySelectorAll(".hole")}showGoblin(){const t=Math.floor(Math.random()*this.hole.length);this.hole.forEach((t=>{t.classList.contains("hole_has-mole")&&t.classList.remove("hole_has-mole")})),this.hole[t].classList.add("hole_has-mole")}};(new class{constructor(){this.dead=0,this.lost=0,this.holesArea=document.querySelector(".hole-game"),this.timer=0}start(){this.timer=setInterval((()=>{t.showGoblin(),this.lost+=1,document.getElementById("lost").textContent=this.lost,this.gameOver()}),1e3),this.holesArea.addEventListener("mousedown",(t=>{t.target.classList.contains("hole_has-mole")&&(t.target.classList.add("hammer"),t.target.classList.remove("hole_has-mole"),this.lost-=1,this.dead+=1,document.getElementById("dead").textContent=this.dead)})),this.holesArea.addEventListener("mouseup",(t=>{t.target.classList.remove("hammer")})),document.querySelector(".new-game").addEventListener("click",(()=>{this.newGame()}))}gameOver(){5===this.lost&&(alert("Вы проиграли!"),clearInterval(this.timer))}newGame(){clearInterval(this.timer),document.getElementById("dead").textContent=0,document.getElementById("lost").textContent=0,this.lost=0,this.dead=0,this.start()}}).start()})();