const prompt =require("prompt-sync")();
let num1 = parseFloat(prompt("input your first number: "));
let sign = prompt("enter your math sign:");
let num2 = parseFloat(prompt("input your second number: "))

if (sign == "+") {
    console.log (num1 + num2);
}
else if (sign == "-") {
     console.log (num1 - num2);
}
else if (sign =="/") {
     console.log (num1 / num2);
}
else if (sign =="*") {
     console.log (num1 * num2);
}
else if (sign =="%") {
     console.log (num1 % num2);
}
else if (sign =="**") {
     console.log (num1 ** num2);
}
else { "INVALID EXPRESSION" }