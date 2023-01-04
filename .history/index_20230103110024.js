// mode
const btnMode = document.querySelectorAll(".button-mode");

function handleMode() {
  for (let i = 0; i < btnMode.length; i++) {
      btnMode[i].className = btnMode[i].className.replace(" active-mode", "");
  }
 this.className += ' active-mode'
}
