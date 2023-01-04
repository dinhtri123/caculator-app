// mode
const btnMode = document.querySelectorAll(".button-mode");

function handleMode(e) {
  for (let i = 0; i < btnMode.length; i++) {
      btnMode[i].className = btnMode[i].className.replace(" active-mode", "");
  }
  e.target.className += ' active-mode'
}
