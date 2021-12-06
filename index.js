function sumNumber(number) {
    let digitsAsList = number.toString().split('');
    let digits = digitsAsList.map(Number);
    let sum = 0;
    for (let digit of digits) {
        sum += digit;
    }
    return sum;
}
 
let sum = sumNumber(31245);