// Thanks: https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
const numberWithCommas = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const formatForCurrency = (n) => numberWithCommas(n.toFixed(2));

export {
  formatForCurrency,
  numberWithCommas,
};
