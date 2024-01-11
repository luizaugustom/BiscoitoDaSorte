
const SortFrase = document.querySelector("#SortFrase")
const screen1 = document.querySelector(".pageOne")
const screen2 = document.querySelector(".pageTwo")
const btnTry = document.querySelector("#buttonOne")
const btnReset = document.querySelector("#buttonTwo")


const frasess = ["A vida trará coisas boas se tiver paciência ", "Não compense na ira o que lhe falta na razão.", " Não há que ser forte. Há que ser flexível.", "A juventude não é uma época da vida, é um estado de espírito."]
function pickFortune(){
let randomFrases = Math.round(Math.random() * 3)
SortFrase.innerText  = frasess[randomFrases]
}

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick, )
document.addEventListener('keydown', function(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }})


function toggleScreen() {

    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function handleTryClick(event) {
    event.preventDefault() // nao faca o padrao
    toggleScreen()
    pickFortune()

}
function handleResetClick() {
    toggleScreen()
    
}
