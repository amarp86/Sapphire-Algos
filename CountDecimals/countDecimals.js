//should count the decimal places in a number

function countDecimals(num) {
  if (num === 0) {
    return 0;
  } else {
    let str = num.toString().split(".")[1];
    return str.split("").length;
  }
}

module.exports = countDecimals;
