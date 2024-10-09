let gameseq = [];
let userseq = [];
let started = false;
let level = 0;
let h3 = document.querySelector("h3");
//  let btn=document.querySelector(".btn");
let btns = ["yellow", "red", "green", "purple"];
let start=document.querySelector("#start");

start.addEventListener("click", function () {
  if (started == false) {
    console.log("started game");
    started = true;
  }
  levelup();
});

function levelup() {
  level++;
  userseq = [];
  h3.innerText = `level ${level}`;
  let ranidx = Math.floor(Math.random() * 3);
  let radcolor = btns[ranidx];
  let rnBtn = document.querySelector(`.${radcolor}`);
  console.log(rnBtn);
  gameseq.push(radcolor);
  // rando. btn choose
  gameFlash(rnBtn);
}
function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 500);
}

function checkAns(idx) {
  // console.log("current level",level);
  if (userseq[idx] == gameseq[idx]) {
    if (userseq.length == gameseq.length) {
      setTimeout(levelup, 1000);
    }
  } else {
    h3.innerHTML = `Game over!Your score was <b>${level}</b> <br>
    plese click button to start.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "cadetblue";
    }, 150);
    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);
  usercolor = btn.getAttribute("id");
  console.log(usercolor);
  userseq.push(usercolor);
  checkAns(userseq.length - 1);
}
let allbtn = document.querySelectorAll(".btn");
for (btn of allbtn) {
  btn.addEventListener("click", btnPress);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 500);
}
function reset() {
  started = false;
  userseq = [];
  gameseq = [];
  level = 0;
}
