
  let cards=Array.from(document.getElementsByClassName("card"));
  cards.forEach(function (item) {
    item.addEventListener("click",function  (event) {
      if(!item.classList.contains("go")){
        if(item.classList.contains("go_back")){
          item.classList.remove("go_back");
          item.querySelector('.label').classList.remove("go_back_pick");}

        item.classList.add("go");
        item.querySelector('.label').classList.add("go_pick");
      }
      else {
        item.classList.remove("go");
        item.querySelector('.label').classList.remove("go_pick");
        item.classList.add("go_back");
        item.querySelector('.label').classList.add("go_back_pick");
      }

    });
  });



