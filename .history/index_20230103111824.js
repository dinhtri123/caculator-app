// mode
// const btnMode = document.querySelectorAll(".button-mode");
// for (let i = 0; i < btnMode.length; i++) {
//   btnMode[i].addEventListener("click", function () {
//     for(let j = 0; j < btnMode.length; j++){
//         btnMode[j].className = btnMode[j].className.replace(' active-mode', "");
//     }
//     this.className += ' active-mode'
//   });
// }

function handleMode() {
  const btnMode = document.querySelectorAll(".button-mode");
  for (let i = 0; i < btnMode.length; i++) {
    btnMode[i].className = btnMode[i].className.replace(" active-mode", "");
  }
}
