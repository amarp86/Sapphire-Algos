//should count the decimal places in a number

function countDecimals(num) {
  if (num === 0) {
    return 0;
  } else {
    let str = num.toString().split(".")[1];
    return str.split("").length;
  }
}
console.log(countDecimals(124.1523));

module.exports = countDecimals;
