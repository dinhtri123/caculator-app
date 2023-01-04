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

const btn = document.querySelectorAll(".btn");
const btnNumber = document.querySelectorAll(".btn-number");
const show = document.querySelector(".show");
let values = [];
for (let i = 0; i < btnNumber.length; i++) {
  btnNumber[i].addEventListener("click", function () {
    const text = this.textContent;
    values.push(text)
    show.textContent = values.split();
    console.log(values);
  });
}
