let popup = document.querySelector("#popup");
function openpopup() {
  popup.classList.add("open-popup");
}
function closepopup() {
  popup.classList.remove("open-popup");
}
document
  .getElementById("grossamount")
  .addEventListener("input", function valid() {
    var value = this.value;
    var message = document.getElementById("message");
    if (isNaN(value)) {
      message.textContent = "Please enter a valid number";
    } else {
      message.textContent = "";
    }
  });
function calculateTax() {
  event.preventDefault();
  const grossIncome = parseFloat(document.getElementById("grossamount").value);
  const extraIncome = parseFloat(document.getElementById("extraincome").value);
  let age = document.getElementById("age").value;
  const deductionTax = parseFloat(
    document.getElementById("deductionamt").value
  );
  let totalIncome = grossIncome + extraIncome - deductionTax;
  console.log(totalIncome);
  let payableTax;
  let taxPercentage;

  if (age === "1") {
    taxPercentage = 0.3;
  } else if (age === "2") {
    taxPercentage = 0.4;
  } else if (age === "3") {
    taxPercentage = 0.1;
  }

  if (totalIncome > 800000) {
    payableTax = taxPercentage * totalIncome;
    finalIncome = totalIncome - payableTax;
    console.log(payableTax);
    document.getElementById("taxamt").textContent = payableTax.toFixed(2);
    document.getElementById("totalamt").textContent = finalIncome.toFixed(2);
  } else {
    console.log("no tax");
    document.getElementById("taxamt").textContent = "no Tax";
    document.getElementById("totalamt").textContent = totalIncome;
  }
}
