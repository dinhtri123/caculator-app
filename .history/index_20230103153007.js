// mode
const btnMode = document.querySelectorAll(".button-mode");
for (let i = 0; i < btnMode.length; i++) {
  btnMode[i].addEventListener("click", function () {
    for (let j = 0; j < btnMode.length; j++) {
      btnMode[j].className = btnMode[j].className.replace(" active-mode", "");
    }
    this.className += " active-mode";
  });
}

const btn = document.querySelectorAll('.btn');
for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', function(){
        
    })
}
