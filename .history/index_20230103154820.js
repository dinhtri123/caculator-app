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
const btnCal = document.querySelectorAll(".btn-cal")
const show = document.querySelector(".show");
let valuesNumber = [];
let valuesCal = [];
let valuesShow = [];
// get value number
for (let i = 0; i < btnNumber.length; i++) {
  btnNumber[i].addEventListener("click", function () {
    const text = this.textContent;
    valuesNumber.push(text);
    valuesShow = valuesNumber + val
    show.textContent = valuesNumber;
  });
}

//get button caculator

for(let i = 0; i < btnCal.length; i++){
    btnCal[i].addEventListener('click', function(){
        const text = this.textContent;
        valuesCal.push(text);
        show.textContent = valuesCal.join("")
    })
}