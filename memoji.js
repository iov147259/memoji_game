(function () {
  window.doubleclick=function () {
    var card=document.activeElement;
    card.addEventListener("click", function add() {
      card.classList.add('go_back');
    });

  }

}());
