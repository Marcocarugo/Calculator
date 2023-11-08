let button = document.getElementById("btn");
let display = document.getElementById("display");
let result = document.getElementById("result");
let clearDisplay = document.getElementById("cancel");
let percent = document.getElementById("percent");
let operator = document.getElementById("operator");

//----Event Delegation----//

let lastInputType = null;

document.body.addEventListener("click", function (event) {
  if (event.target.id === "btn" || event.target.id === "operator") {
    const input = event.target.textContent;

    if(display.innerHTML.length >= 9){
      return display.innerHTML = "Error"
    }

    if (display.innerHTML === "0") {
      display.innerHTML = "";
    }

    if (isOperator(input) && isOperator(lastInputType)) {
      display.innerHTML = display.innerHTML.slice(0, -1) + input;
    } else {
      display.innerHTML += input;
    }
    lastInputType = input;
  }
});

function isOperator(input) {
  return (
    input === "+" ||
    input === "-" ||
    input === "x" ||
    input === "÷" ||
    input === "%" ||
    input === "±"
  );
}

//----Calculator----//

result.addEventListener("click", function calculator() {
  if (display.innerHTML === "") {
    display.innerHTML = "Inserire un valore";
    return;
  }

  let input = display.innerHTML;
  input = input.replace(/x/g, "*");
  input = input.replace(/÷/g, "/");
  input = input.replace(/,/g, ".");

  const result = eval(input);
  display.innerHTML = parseFloat(result).toFixed(2);
});

//---Setting Operators----//

minor.addEventListener("click", function () {
  if (this.innerHTML.includes("±")) {
    this.innerHTML = "±"
    display.innerHTML = "-";
  }
});

percent.addEventListener("click", function(){
  let percentage = display.innerHTML / 100;
  display.innerHTML = percentage
})

//----Cancel Operator----//

clearDisplay.addEventListener("click", function () {
  display.innerHTML = "0";
});
