// mode
const btnMode = document.querySelectorAll(".button-mode");

for(let i = 0; i < btnMode.length; i++){
    btnMode[i].addEventListener('click', function(){
        btnMode[0].classList = btnMode[0].classList.replace(' active-mode', "");
        btnMode[i]
    })
}