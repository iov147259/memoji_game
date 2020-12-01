function getRandomPosition(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max) + 1;
  return Math.floor(Math.random() * (max - min)) + min;
}

function mix() {
  let box = document.querySelector(".card_box");
  let elements = box.querySelectorAll('.card');
  for (let i = 0; i < elements.length ; i++) {
    let movedElement = getRandomPosition(0, elements.length);
    document.querySelector(".card_box").appendChild(elements[movedElement]);
  }
}

if (document.readyState == 'loading') {
  document.addEventListener("DOMContentLoaded", mix);
} else {
  mix();
}

/*
обработчик  одинаквых карт
 */
function rightlyTurn(firstcard, secondcard) {
  firstcard.classList.add("right");
  firstcard.classList.add("right_static");
  secondcard.classList.add("right");
  secondcard.classList.add("right_torn");
  secondcard.querySelector(".label").classList.add("go_pick");
}

/*
обработчик  разных карт
 */
function wrongTurn(firstcard, secondcard) {
  firstcard.classList.add("wrong");
  firstcard.classList.add("wrong_static");
  secondcard.classList.add("wrong");
  secondcard.classList.add("rotate_wrong");
  secondcard.querySelector(".label").classList.add("go_pick");

}

function check(firstcard, secondcar) {
  if (firstcard.classList[2] === secondcar.classList[2]) {
    rightlyTurn(firstcard, secondcar);
  } else {
    wrongTurn(firstcard, secondcar);
  }

}
let startimer=59;//объявляем начальный таймер
let timer;
function countdown(){
if(startimer<10){
  document.querySelector(".timer>.seconds").innerHTML="0"+startimer;
}else {  document.querySelector(".timer>.seconds").innerHTML=startimer;}
  document.querySelector(".timer>.minutes").innerHTML="00:"
  if(startimer<1){
    clearTimeout(timer);
  }else{
    timer=setTimeout(countdown,1000);
  }
  startimer--;
}

let cards = Array.from(document.getElementsByClassName("card"));
cards.forEach(function (item) {
  item.addEventListener("click", function (event) {

    let first=document.querySelectorAll(".first");
    if(first.length===0)//проверка что активный элемент превый
    {
      countdown();
    }//тут запускается таймер
    item.classList.add("first");

    item.classList.remove("go_back_wrong");
    item.classList.remove("rotate_wrong");
    item.classList.remove("go_back");
    item.querySelector('.label').classList.remove("go_back_pick");
    if (item.classList.contains("right")||item.classList.contains("wrong")) {
      return;
    }



    let activeNow = document.querySelectorAll(".active");
    if (activeNow.length === 2 ) {
      activeNow[0].classList.remove("active");
      activeNow[1].classList.remove("active");
    }


    let wrong=document.querySelectorAll(".wrong");
    if(wrong.length===2){
      wrong[0].classList.add("go_back_wrong");
      wrong[1].classList.add("go_back_wrong");
      wrong[0].querySelector('.label').classList.add("go_back_pick");
      wrong[1].querySelector('.label').classList.add("go_back_pick");
      wrong[0].classList.remove("wrong");
      wrong[0].classList.remove("wrong_static");
      wrong[1].classList.remove("wrong_static");
      wrong[1].classList.remove("rotate_wrong");
      wrong[1].classList.remove("wrong");
      wrong[0].classList.remove("go");
      wrong[1].classList.remove("go");
    }


    if (!item.classList.contains("go")) {
      if (item.classList.contains("go_back") ||item.classList.contains("wrong")) {
        item.classList.remove("wrong");
        item.classList.remove("go_back");
        item.querySelector('.label').classList.remove("go_back_pick");
      }
      item.classList.add("go");
      item.querySelector('.label').classList.add("go_pick")


    } else {
      if (!item.classList.contains("right") || !item.classList.contains("wrong")) {
        item.classList.remove("go");
        item.querySelector('.label').classList.remove("go_pick");
        item.classList.add("go_back");
        item.querySelector('.label').classList.add("go_back_pick");
      }
    }

    if (!item.classList.contains("wrong")) {
      item.classList.add("active");
    }
    if (activeNow.length === 1 && item !== activeNow[0]) {
      item.classList.remove("go_back_wrong");
      item.classList.remove("rotate_wrong");
      item.classList.remove("go_back");
      item.querySelector('.label').classList.remove("go_back_pick");
      check(activeNow[0], item);
    }
  });
});



