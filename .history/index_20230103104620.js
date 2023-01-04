// mode
const btnMode = document.querySelectorAll(".button-mode");

for (let i = 0; i < btnMode.length; i++) {
  btnMode[i].addEventListener("click", function () {
    btnMode[0].classList = btnMode[0].repl("active-mode", "");
    console.log(btnMode[0])
    btnMode[i].classList.add("active-mode");
  });
}
