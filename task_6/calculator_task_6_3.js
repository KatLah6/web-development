// Function to increment the value of the input field
function increment(id) {
    const input = document.getElementById(id);
    input.value = parseInt(input.value) + 1; // Increment by 1
}

// Function to decrement the value of the input field
function decrement(id) {
    const input = document.getElementById(id);
    input.value = parseInt(input.value) - 1; // Decrement by 1, not allowing negative values
}

// Function to perform calculation based on selected operation
function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;

    // Check for valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    // Perform the calculation based on the selected operation
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                alert("Cannot divide by zero.");
                return;
            }
            result = num1 / num2;
            break;
    }

    // Display the result
    document.getElementById('result').textContent = result;
}