// mode
const btnMode = document.querySelectorAll(".button-mode");
const wrapper = document.querySelector(".wrapper");
const main = document.querySelector(".main");

for (let i = 0; i < btnMode.length; i++) {
  btnMode[i].addEventListener("click", function () {
    for (let j = 0; j < btnMode.length; j++) {
      btnMode[j].className = btnMode[j].className.replace(" active-mode", "");
    }

    this.className += " active-mode";
  });
}
// caculator
const btn = document.querySelectorAll(".btn");
const result = document.querySelector(".result");
const show = document.querySelector(".show");
const equal = document.querySelector(".equal");
const resetField = document.querySelector(".clear");
const clearOneNumber = document.querySelector(".delete");
const undo = document.querySelector(".undo");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    show.textContent += this.value;
  });
}

equal.addEventListener("click", function () {
  const res = show.textContent;
  const output = eval(res);
  result.textContent = output;
  localStorage.setItem("undo", (show.textContent += this.value));
});

clearOneNumber.addEventListener("click", function () {
  let res = show.textContent;
  show.textContent = res.slice(0, -1);
});

resetField.addEventListener("click", function () {
  show.textContent = "";
  result.textContent = "";
});

undo.addEventListener("click", function () {
  let values = localStorage.getItem("undo");
  show.textContent = values;
});
