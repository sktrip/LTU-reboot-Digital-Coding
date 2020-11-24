var billAmount = 47
var tipAmount = 15

var tipCalculated = billAmount * (tipAmount/100)

var totalBill = billAmount + tipCalculated


alert('Your total bill, with tip, is £' + totalBill.toFixed(2))
console.log('Your total bill, with tip of ' +tipCalculated +', is £' + totalBill.toFixed(2))
document.write('Your total bill, with tip of £' +tipCalculated +', is £' + totalBill.toFixed(2))