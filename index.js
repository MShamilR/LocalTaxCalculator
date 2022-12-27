const perMonth = document.querySelector(".input-monthValue");
const perAnnum = document.querySelector(".input-annumValue");
const monthlyIncome = document.querySelector(".mI");
const yearlyIncome = document.querySelector(".yI");
const monthlyTax = document.querySelector(".mTD");
const yearlyTax = document.querySelector(".yTD");
const monthlyTH = document.querySelector(".mTH");
const yearlyTH = document.querySelector(".yTH");
/* const check = document.querySelector(".check");
 */

const toLKR = (value) => {
  let LKR = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "LKR",
  }).format(value);
  return LKR;
};

var cleave = new Cleave(".input-monthValue", {
  numeral: true,
  numeralThousandsGroupStyle: "lakh",
  prefix: "LKR ",
});

/*
 */
var cleave = new Cleave(".input-annumValue", {
  numeral: true,
  numeralThousandsGroupStyle: "lakh",
  prefix: "LKR ",
});

perMonth.onfocus = function () {
  perMonth.value = "LKR ";
  perAnnum.value = "LKR ";
};

perAnnum.onfocus = function () {
  perMonth.value = "LKR ";
  perAnnum.value = "LKR ";
};

perMonth.onkeyup = function (e) {
  /* if (perMonth.value === "LKR ") {
    perAnnum.value = "LKR ";
    return;
  } */
  /*  const parsedValue = parseFloat(e.target.value.replace(/,/g, "")); */
  const parsedValue = parseFloat(e.target.value.replace(/[^\d\.]*/g, ""));
  //const multipliedValue = parsedValue * 12;
  let multipliedValue
  if (isNaN(parsedValue)) {
    perAnnum.value = `LKR `;
  } else {
    multipliedValue = parsedValue * 12
    perAnnum.value = `LKR ` + `${multipliedValue.toLocaleString("en-IN")}`;
  }
  
  /* window.annumNumberValue = multipliedValue; */
  //perAnnum.value = `LKR ` + `${multipliedValue.toLocaleString("en-IN")}`;
  /* console.log(window.annumParsedValue) */
};

perAnnum.onkeyup = function (e) {
  /* if (perAnnum.value === "LKR ") {
    perMonth.value = "LKR ";
    return;
  } */
  /* const parsedValue = parseFloat(e.target.value.replace(/,/g, "")); */
  const parsedValue = parseFloat(e.target.value.replace(/[^\d\.]*/g, ""));
  //const dividedValue = parsedValue / 12;
  let dividedValue
  if (isNaN(parsedValue)) {
    perMonth.value = `LKR `;
  } else {
    dividedValue = parsedValue / 12;
    perMonth.value = `LKR ` + `${dividedValue.toLocaleString("en-IN")}`;
  }
  /* window.annumParsedValue = parsedValue;
  window.monthNumberValue = dividedValue; */
  //perMonth.value = `LKR ` + `${dividedValue.toLocaleString("en-IN")}`;
  //console.log(parsedValue);
};

const calculate = () => {
  /* document.querySelector(".mI").innerHTML = perMonth.value; */
  const monthlyValue = parseFloat(perMonth.value.replace(/[^\d\.]*/g, ""));
  const yearlyValue = parseFloat(perAnnum.value.replace(/[^\d\.]*/g, ""));

  const annumValue = parseFloat(perAnnum.value.replace(/[^\d\.]*/g, ""));
  console.log(annumValue);
  let pAV = annumValue;
  let taxAmount = "";
  if (isNaN(pAV)) {
    alert("Please enter your monthly income or yearly income");
    return;
  }
  if (pAV <= 1200000) {
    console.log(
      "You don't have to pay taxes as of now, Work hard until you have to pay taxes"
    );
  } else if (pAV <= 1700000) {
    // First 0.5 mill
    const taxable = pAV - 1200000;
    taxAmount = taxable * 0.06;
    console.log(taxAmount);
  } else if (pAV <= 2200000) {
    // Second 0.5 mill
    const taxable = pAV - 1700000;
    taxAmount = 30000 + taxable * 0.12;
    console.log(taxAmount);
  } else if (pAV <= 2700000) {
    // Third 0.5 mill
    const taxable = pAV - 2200000;
    taxAmount = 30000 + 60000 + taxable * 0.18;
    console.log(taxAmount);
  } else if (pAV <= 3200000) {
    // Fourth 0.5 mill
    const taxable = pAV - 2700000;
    taxAmount = 30000 + 60000 + 90000 + taxable * 0.24;
    console.log(taxAmount);
  } else if (pAV <= 3700000) {
    // Fifth 0.5 mill
    const taxable = pAV - 3200000;
    taxAmount = 30000 + 60000 + 90000 + 120000 + taxable * 0.3;
    console.log(taxAmount);
  } else {
    const taxable = pAV - 3700000;
    taxAmount = 30000 + 60000 + 90000 + 120000 + 150000 + taxable * 0.36;
    console.log(taxAmount);
  }

  const monthlyTaxValue = taxAmount / 12;
  const yearlyTaxValue = taxAmount;

  const monthlyTHValue = monthlyValue - monthlyTaxValue;
  const yearlyTHValue = yearlyValue - yearlyTaxValue;

  monthlyIncome.innerHTML = toLKR(monthlyValue);
  yearlyIncome.innerHTML = toLKR(yearlyValue);
  monthlyTax.innerHTML = toLKR(monthlyTaxValue);
  yearlyTax.innerHTML = toLKR(yearlyTaxValue);
  monthlyTH.innerHTML = toLKR(monthlyTHValue);
  yearlyTH.innerHTML = toLKR(yearlyTHValue);
};
