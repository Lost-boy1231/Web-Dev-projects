let grossIncome = 2500000;
let extraIncome = 1000;
let age = 50;
let deductionAmt = 1000;
let totalIncome = grossIncome + extraIncome - deductionAmt;
console.log(totalIncome);
let payableAmt;
let taxPercentage;

if (age < 40) {
  taxPercentage = 0.3;
} else if ((age) => 40 && age < 60) {
  taxPercentage = 0.4;
} else if ((age) => 60) {
  taxPercentage = 0.1;
}

if (totalIncome > 800000) {
  payableAmt = taxPercentage * totalIncome;
  console.log(payableAmt);
} else {
  console.log("no tax");
}
const reset = () => {
  document.getElementById("reset").reset();
};
