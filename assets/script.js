let showResult = document.querySelector('#showResult'), 
firstNumber = 0, 
operation = null,
resetAfterOperation = false;

function sum(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function divide(a, b){
    return a / b;
}

function multiply(a, b){
    return a * b;
}

document.querySelectorAll('#calculator .number').forEach(button =>{
    button.addEventListener("click", event =>{
        let value = event.currentTarget.innerHTML
        if(resetAfterOperation){
            showResult.value = value
            resetAfterOperation = false
        } else{
            showResult.value += value
        }
    })
})

document.querySelectorAll('#calculator .operation').forEach(button =>{
    button.addEventListener("click", event=>{
        firstNumber = Number.parseInt(showResult.value)
        operation = event.currentTarget.dataset.action
        resetAfterOperation = true
    })
})

const equal = document.querySelector('#calculator .equal')
equal.addEventListener("click", () => {
    if(!operation){
        return
    }

    resetAfterOperation = true
    let secondNumber = Number.parseInt(showResult.value,10)

    if(operation == "sum"){
        showResult.value = sum(firstNumber, secondNumber)
    } else if(operation == "subtract"){
        showResult.value = subtract(firstNumber, secondNumber)
    } else if (operation == "divide"){
        showResult.value = divide(firstNumber, secondNumber)
    } else if (operation == "multiply"){
        showResult.value = multiply(firstNumber, secondNumber)
    } 
})

operation = null