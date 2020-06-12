exports.taxCalc = (num) => {
    let tax;
    if (num <= 195850) {
        tax = (num * 0.18)
        return Number(tax.toFixed(2))
    } else if (num >= 195851 && num <= 305850) {
        tax = 35253 + ((num - 195850) * 0.26)
        return Number(tax.toFixed(2))
    } else if (num >= 305851 && num <= 423300) {
        tax = 63853 + ((num - 305850) * 0.31)
        return Number(tax.toFixed(2))
    } else if (num >= 423301 && num <= 555600) {
        tax = 100263 + ((num - 423300) * 0.36)
        return Number(tax.toFixed(2))
    } else if (num >= 555601 && num <= 708310) {
        tax = 147891 + ((num - 555600) * 0.39)
        return Number(tax.toFixed(2))
    } else if (num >= 708311 && num <= 1500000) {
        tax = 207448 + ((num - 708310) * 0.41)
        return Number(tax.toFixed(2))
    } else {
        tax = 532041 + ((num - 1500000) * 0.45) 
        return Number(tax.toFixed(2))
    }
}
