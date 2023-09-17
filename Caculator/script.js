const inputCon = document.getElementById('input')
const numberButton = Array.from(document.getElementsByClassName('box'))
let currentInput = '';
let currentOperator = '';

numberButton.forEach(button => {
    button.addEventListener('click', (e) => {
        const clickedContent = e.target.textContent
        console.log(clickedContent)

        if (/[0-9]/.test(clickedContent)) {
            currentInput += clickedContent
            inputCon.textContent = currentInput
        } else if (clickedContent === 'C') {
            clearCalculator()
        } else if (clickedContent === '=') {
            calculateResult()
        }else{
            handleOperator(clickedContent);
        }
    })
})

function clearCalculator() {
    currentInput = ''
    currentOperator = ''
    inputCon.textContent = ''
}

function handleOperator(operator){
    if(currentOperator !== ''){
        calculateResult();
    }
    currentOperator = operator
    currentInput += ` ${operator} `;
    inputCon.textContent = currentInput;
}

function calculateResult() {
    const parts = currentInput.split(' ');
    if (parts.length !== 3) return;
    console.log(parts)
    const num1 = parseFloat(parts[0]);
    const num2 = parseFloat(parts[2]);

    if (isNaN(num1) || isNaN(num2)) {
        clearCalculator();
        return;
    }

    let result;
    switch (currentOperator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case 'X':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                clearCalculator();
                return;
            }
            result = num1 / num2;
            break;
    }
    inputCon.textContent = result;
    currentInput = result.toString();
    currentOperator = '';
}