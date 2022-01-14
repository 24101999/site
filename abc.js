const inputA = document.getElementById('input-one')
const inputB = document.getElementById('input-two')
const inputC = document.getElementById('input-three')
const button = document.getElementById('btn')

button.addEventListener('click', (x) => {
    if (inputA.value == "") {
        inputA.classList.add('a')
        x.preventDefault()
    } else {
        inputA.classList.remove("a")
    }
})

button.addEventListener('click', (x) => {
    if (inputB.value == "") {
        inputB.classList.add('a')
        x.preventDefault()
    } else {
        inputB.classList.remove("a")
    }
})

button.addEventListener('click', (x) => {
    if (inputC.value == "") {
        inputC.classList.add('a')
        x.preventDefault()
    } else {
        inputC.classList.remove("a")
    }
})