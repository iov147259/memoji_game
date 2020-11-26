function getRandomPosition(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max) + 1;
  return Math.floor(Math.random() * (max - min)) + min;
}

function mix() {
  let box = document.querySelector(".card_box");
  let elements = box.querySelectorAll('.card');
  for (let i = 0; i < elements.length * 2; i++) {
    let movedElement = getRandomPosition(0, elements.length);
    document.querySelector(".card_box").appendChild(elements[movedElement]);
  }
}

if (document.readyState == 'loading') {
  document.addEventListener("DOMContentLoaded", mix);
} else {
  mix();
}

function rightlyTurn(firstcard, secondcard) {
  firstcard.querySelector('.label').style.backgroundColor = "#5AD66F";
  secondcard.querySelector('.label').style.backgroundColor = "#5AD66F";
  firstcard.classList.add("right");
  secondcard.classList.add("right");
}

function wrongTurn(firstcard, secondcard) {

  firstcard.classList.remove("go");
  firstcard.querySelector('.label').classList.remove("go_pick");
  firstcard.classList.add("go_back");
  firstcard.querySelector('.label').classList.add("go_back_pick");
  firstcard.querySelector('.label').style.backgroundColor = "#F44336";
  secondcard.classList.remove("go");
  secondcard.querySelector('.label').classList.remove("go_pick");
  secondcard.classList.add("go_back");
  secondcard.querySelector('.label').classList.add("go_back_pick");
  secondcard.querySelector('.label').style.backgroundColor = "#F44336";
}

function check(first_card, second_card) {
  if (first_card.classList[2] == second_card.classList[2]) {
    rightlyTurn(first_card, second_card);
  } else {
    wrongTurn(first_card, second_card);
  }
}


let cards = Array.from(document.getElementsByClassName("card"));
cards.forEach(function (item) {
  item.addEventListener("click", function (event) {
    if (!item.classList.contains("go")) {
      if (item.classList.contains("go_back")) {

        item.classList.remove("go_back");
        item.querySelector('.label').classList.remove("go_back_pick");
      }
      item.classList.add("go");
      item.querySelector('.label').classList.add("go_pick");
    } else {
      if (!item.classList.contains("right")) {
        item.classList.remove("go");
        item.querySelector('.label').classList.remove("go_pick");
        item.classList.add("go_back");
        item.querySelector('.label').classList.add("go_back_pick");
      }
    }

  });
});



