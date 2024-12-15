// script.js
document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");
    const clearButton = document.getElementById("clear");
    const equalsButton = document.getElementById("equals");
  
    let currentInput = "";
    let operator = null;
    let firstOperand = null;
  
    // Function to update the display
    function updateDisplay(value) {
      display.textContent = value;
    }
  
    // Handle button clicks
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const value = button.dataset.value;
  
        // Handle number and decimal input
        if (!isNaN(value) || value === ".") {
          currentInput += value;
          updateDisplay(currentInput);
        }
  
        // Handle operators
        if (["+", "-", "*", "/"].includes(value)) {
          if (currentInput !== "") {
            firstOperand = parseFloat(currentInput);
            currentInput = "";
          }
          operator = value;
        }
      });
    });
  
    // Handle equals button
    equalsButton.addEventListener("click", () => {
      if (firstOperand !== null && operator !== null && currentInput !== "") {
        const secondOperand = parseFloat(currentInput);
        let result;
  
        switch (operator) {
          case "+":
            result = firstOperand + secondOperand;
            break;
          case "-":
            result = firstOperand - secondOperand;
            break;
          case "*":
            result = firstOperand * secondOperand;
            break;
          case "/":
            result = firstOperand / secondOperand;
            break;
        }
  
        updateDisplay(result);
        currentInput = "";
        operator = null;
        firstOperand = null;
      }
    });
  
    // Handle clear button
    clearButton.addEventListener("click", () => {
      currentInput = "";
      operator = null;
      firstOperand = null;
      updateDisplay("0");
    });
  });
  