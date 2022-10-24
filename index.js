const perMonth = document.querySelector(".input-monthValue");
const perAnnum = document.querySelector(".input-annumValue");
/* const check = document.querySelector(".check");
 */
var cleave = new Cleave(".input-monthValue", {
  numeral: true,
  numeralThousandsGroupStyle: "lakh",
  prefix: 'LKR '
});

/* 
 */
var cleave = new Cleave(".input-annumValue", {
  numeral: true,
  numeralThousandsGroupStyle: "lakh",
  prefix: 'LKR '
});

perMonth.onkeyup = function (e) {
  if (perMonth.value === 'LKR ') {
    perAnnum.value = 'LKR ';
    return;
  }
 /*  const parsedValue = parseFloat(e.target.value.replace(/,/g, "")); */
  const parsedValue = parseFloat(e.target.value.replace(/[^\d\.]*/g, ""));
  const multipliedValue = parsedValue * 12;
  perAnnum.value = `LKR `+`${multipliedValue.toLocaleString("en-IN")}`
};

perAnnum.onkeyup = function (e) {
  if (perAnnum.value === 'LKR ') {
    perMonth.value = 'LKR ';
    return;
  }
  /* const parsedValue = parseFloat(e.target.value.replace(/,/g, "")); */
  const parsedValue = parseFloat(e.target.value.replace(/[^\d\.]*/g, ""));
  const dividedValue = parsedValue / 12;
  perMonth.value = `LKR `+`${dividedValue.toLocaleString("en-IN")}`
};




