var num1 = prompt("Enter your first number 1");
var num2 = prompt("Enter your second number :");
var opr = prompt("Enter any of the operators ( +, -, *, /): ");

if (isNaN(num1) || isNaN(num2) === true) {
  alert("Enter a valid Number");
} else if (opr == "+") {
  alert("The result of your operation is :" + (Number(num1) + Number(num2)));
} else if (opr == "-") {
  alert("The result of your operation is :" + (Number(num1) - Number(num2)));
} else if (opr == "*") {
  alert("The result of your operation is :" + Number(num1) * Number(num2));
} else if (opr == "/") {
  alert("The result of your operation is :" + Number(num1) / Number(num2));
}
