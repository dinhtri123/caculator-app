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
const btnCal = document.querySelectorAll(".btn-cal");
const show = document.querySelector(".show");
const result = document.querySelector(".result");

let valuesNumber = [];
// get value number
for (let i = 0; i < btnNumber.length; i++) {
  btnNumber[i].addEventListener("click", function () {
    const text = this.textContent;
    valuesNumber.push(text);
    show.textContent = valuesNumber.join("");
  });
}
//get button caculator

for (let i = 0; i < btnCal.length; i++) {
  btnCal[i].addEventListener("click", function () {
    const text = this.textContent;
    valuesNumber.push(text);
    show.textContent = valuesNumber.join("");
  });
  //   if (valuesNumber.indexOf("+") !== -1) {
  //     result.textContent =
  //       valuesNumber.slice(0, valuesNumber.indexOf("+")) +
  //       valuesNumber.slice(valuesNumber.indexOf("+"));
  //       console.log(result.textContent)
  //   }
}

const close = document.querySelector(".close");
close.addEventListener("click", function () {
    valuesNumber.pop();
    show.textContent = valuesNumber.join("")
});

const reset = document.querySelector('.clear');
reset.addEventListener('click', function(){
    show
})