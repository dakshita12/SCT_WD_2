const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let expression = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (btn.id === "clear") {
      expression = "";
      display.value = "";
    } else if (btn.id === "delete") {
      expression = expression.slice(0, -1);
      display.value = expression;
    } else if (btn.id === "equals") {
      try {
        expression = eval(expression).toString();
        display.value = expression;
      } catch {
        display.value = "Error";
        expression = "";
      }
    } else {
      expression += value;
      display.value = expression;
    }
  });
});
