function compute() {
    const input1 = parseFloat(document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value);
    const operator = document.querySelector('input[name="operator"]:checked');

    let result;

    if (isNaN(input1) || isNaN(input2)) {
        alert("Please enter valid numbers.");
        return;
    }

    if (!operator) {
        alert("Please select an operation.");
        return;
    }

    switch (operator.value) {
        case '+':
            result = input1 + input2;
            break;
        case '-':
            result = input1 - input2;
            break;
        case '*':
            result = input1 * input2;
            break;
        case '/':
            result = input2 !== 0 ? input1 / input2 : 'Error: Division by zero';
            break;
        default:
            return;
    }

    document.getElementById('result').value = `Result: ${result}`;
}

function clearFields() {
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    document.getElementById('result').value = '';
    const operators = document.getElementsByName('operator');
    for (const operator of operators) {
        operator.checked = false;
    }
}