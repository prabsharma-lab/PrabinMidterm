function calculateFactorial() {
  const input = document.getElementById("numberInput");
  const output = document.getElementById("output");
  const num = parseInt(input.value);

  if (isNaN(num) || num < 0) {
    output.textContent = "Please enter a valid positive number.";
    return;
  }

  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  output.textContent = `${num}! = ${result}`;
}
