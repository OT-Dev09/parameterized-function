function num(reg) {
    let userInput = document.getElementById('input')
    userInput.value += reg
    console.log(reg)
}

function calculate() {
    let userInput = document.getElementById('input')
    userInput.value = eval(userInput.value)
}