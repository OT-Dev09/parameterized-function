function num(reg) {
    let userInput = document.getElementById('input')
    console.log(reg)
    userInput.value += reg
}

function calculate() {
    let userInput = document.getElementById('input')
    userInput.value = eval(userInput.value)
}

function action(remove) {
    let userInput = document.getElementById('input')
    if (remove === 'DEL' && userInput.value.length > 0) {
        userInput.value = userInput.value.slice(0, -1)
    } else if (remove === 'CLR') {
        userInput.value = ''
    }
}