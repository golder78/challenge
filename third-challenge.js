const prompt = require("prompt-sync")();

let basicSalary = parseFloat(prompt("Enter your salary:"));

let benefits = parseFloat(prompt("Enter your benefits:"));

const grossSalary = basicSalary + benefits;

function tax() {
  let taxTotal;
  if (grossSalary <= 24000) {
    taxTotal = grossSalary * 0.1;
  } else if (grossSalary >= 24001 && grossSalary <= 32333) {
    taxTotal = grossSalary * 0.25;
  } else if (grossSalary >= 32334 && grossSalary <= 500000) {
    taxTotal = grossSalary * 0.3;
  } else if (grossSalary >= 500001 && grossSalary <= 800000) {
    taxTotal = (grossSalary - 60000) * 0.25;
  } else {
    taxTotal = grossSalary * 0.35;
  }
  return taxTotal;
}


function nhifreductions() {
  let reductionAmount;
  if (grossSalary <= 5999) {
    reductionAmount = 150;
  } else if (grossSalary >= 6000 && grossSalary <= 7999) {
    reductionAmount = 300;
  } else if (grossSalary >= 8000 && grossSalary <= 11999) {
    reductionAmount = 400;
  } else if (grossSalary >= 12000 && grossSalary <= 14999) {
    reductionAmount = 500;
  } else if (grossSalary >= 15000 && grossSalary <= 19999) {
    reductionAmounteductionAmount = 600;
  } else if (grossSalary >= 20000 && grossSalary <= 24999) {
    reductionAmount = 750;
  } else if (grossSalary >= 25000 && grossSalary <= 29999) {
    reductionAmount = 850;
  } else if (grossSalary >= 30000 && grossSalary <= 34999) {
    reductionAmount = 900;
  } else if (grossSalary >= 35000 && grossSalary <= 39999) {
    reductionAmount = 950;
  } else if (grossSalary >= 40000 && grossSalary <= 44999) {
    reductionAmount = 1000;
  } else if (grossSalary >= 45000 && grossSalary <= 49999) {
    reductionAmount = 1100;
  } else if (grossSalary >= 50000 && grossSalary <= 59999) {
    reductionAmount = 1200;
  } else if (grossSalary >= 60000 && grossSalary <= 69999) {
    reductionAmount = 1300;
  } else if (grossSalary >= 70000 && grossSalary <= 79999) {
    reductionAmount = 1400;
  } else if (grossSalary >= 80000 && grossSalary <= 89999) {
    reductionAmount = 1500;
  } else if (grossSalary >= 90000 && grossSalary <= 99999) {
    reductionAmount = 1600;
  } else {
    reductionAmount = 1700;
  }
  return reductionAmount;
}

function nssfreductions() {
  let nssf = grossSalary * 0.06;
  return nssf;
}
let nssf = nssfreductions();
let nhif = nhifreductions();
let paye= tax();

const netSalary = grossSalary - (nssf + nhif + paye);
console.log('Net Salary : ${netSalary}');