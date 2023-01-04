// mode
const btnMode = document.querySelectorAll(".button-mode");
for (let i = 0; i < btnMode.length; i++) {
  btnMode[i].addEventListener("click", function () {
    btnMode[i].className = btnMode[i].className.replace(" active-mode", "");
    this.className = this.className.add
  });
}
