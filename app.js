const screenDisplay = document.querySelector('.screen')
const buttons = document.querySelectorAll('button')

// we are trying to get a string from the array of inputs and eval (get result)
let calculation = []
let accumulativeCalculation     // gets the values and displays on the screen w/o ','

function calculate(button) {
    const value = button.textContent

    if (value === "CLEAR") {
        calculation = []
        screenDisplay.textContent = '.'
    }
    else if (value === "=") {
        try {
            screenDisplay.textContent = eval(accumulativeCalculation)
        } catch (error) {
            screenDisplay.textContent = error.message
        } finally {
            screenDisplay.textContent = eval(accumulativeCalculation)
        }
        
    }
    else {
        calculation.push(value)
        accumulativeCalculation = calculation.join('')
        screenDisplay.textContent = accumulativeCalculation     // displays the buttons clicked
    }


}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))
