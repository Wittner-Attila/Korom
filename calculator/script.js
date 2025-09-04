let operation = '';

const calculate = () => {
    let firstNumber = parseFloat(document.getElementById('firstNumber').value);
    let secondNumber = parseFloat(document.getElementById('secondNumber').value);
    let result = 0;
    let operation = document.getElementById('operators').value;
    switch (operation) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            result = secondNumber !== 0 ? firstNumber / secondNumber : 'Error: Division by zero';
            break;
        case '^':
            result = Math.pow(firstNumber, secondNumber);
            break;
        case '%':
            result = (firstNumber / secondNumber) * 100 + '%';
            break;
        default:
            result = 'Error: No operation selected';
            break;
    }
    document.getElementById(
        'result',
    ).innerText = `Result of (${firstNumber} ${operation} ${secondNumber}): ${result}`;
};
