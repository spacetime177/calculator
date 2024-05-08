let equalPressed = 0;
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = function() {
    input.value = "";
  };
  

function handleButtonClick(buttonClass) {
  if (equalPressed === 1) {
    equalPressed = 0;
  }
  input.value += buttonClass.value;
}

function handleEqualClick() {
  equalPressed = 1;
  let inputValue = input.value;
  try {
    let solution = eval(inputValue);
    if (Number.isNaN(solution) || !Number.isFinite(solution)) {
      throw new Error("Invalid mathematical expression");
    }
    if (Number.isInteger(solution)) {
      input.value = solution;
    } else {
      input.value = solution.toFixed(2);
    }
  } catch (error) {
    alert(error.message);
  }
}

function handleClearClick() {
  input.value = "";
}

function handleEraseClick() {
  input.value = input.value.substr(0, input.value.length - 1);
}

document.querySelectorAll(".button").forEach(function(buttonClass) {
    buttonClass.addEventListener("click", handleButtonClick.bind(null, buttonClass));
  });
  

equal.addEventListener("click", handleEqualClick);
clear.addEventListener("click", handleClearClick);
erase.addEventListener("click", handleEraseClick);
