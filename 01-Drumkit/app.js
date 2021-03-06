var grid_items = document.querySelectorAll(".grid-item");

function clickHandler(e) {
  // console.log(e);
  var audio = new Audio(`sounds/sound${this.id[this.id.length - 1]}.wav`);
  audio.play();
}

//forms closure and can be defined elsewhere
function callBack(eachItem, index, grid_items) {
  eachItem.id = "grid-item" + (index + 1);
  // ['click', 'keypress'].forEach(ev => {
  //   // eachItem.addEventListener(ev, clickHandler);
  // })
  eachItem.addEventListener("click", clickHandler);
  // eachItem.addEventListener("keypress", clickHandler);
}

window.addEventListener("keydown", function (e) {
  let audio = new Audio(`sounds/sound${e.key}.wav`);   
  audio.play()
});

grid_items.forEach(callBack);
