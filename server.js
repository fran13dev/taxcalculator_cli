const tax = require('./taxCalculator.js')
const readlineSync = require('readline-sync')

const salary = readlineSync.question('Please enter your annual income, before tax:')
const taxAmount = Number(salary)

Number(taxAmount) ? (
    console.log(`Your total taxable amount per annum is R${tax.taxCalc(taxAmount)}`)
) : (
    console.log('Please enter a valid number')
)