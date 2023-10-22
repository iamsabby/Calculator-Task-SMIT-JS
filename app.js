function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
    } else if (!isValidOperator(operator)) {
        alert("Please enter a valid operator (+, -, *, /).");
    } else {
        const result = performCalculation(num1, num2, operator);
        alert(`Result: ${result}`);
    }
}

function isValidOperator(op) {
    return /^[+\-*/]$/.test(op);
}

function performCalculation(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                alert("Division by zero is not allowed.");
                return "Error";
            }
            return num1 / num2;
    }
}
