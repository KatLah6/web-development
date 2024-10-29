function calculate() {
    // Get input values and check if they are numbers
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;

    // Check for valid numbers and handle empty inputs
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers in both fields.");
        return;
    }

    // Perform calculation based on the selected operation
    if (operation === 'add') {
        result = num1 + num2;
    } else if (operation === 'subtract') {
        result = num1 - num2;
    } else if (operation === 'multiply') {
        result = num1 * num2;
    } else if (operation === 'divide') {
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            alert("Cannot divide by zero");
            return;
        }
    }

    // Display the result
    document.getElementById('result').textContent = result;
}