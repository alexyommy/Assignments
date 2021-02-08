//  1. Sigma
function sigma(num) {
    var sum = 0;
    for (var i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}
// console.log(sigma(4));

//  2. Factorial 
function factorial(num) {
    var product = 1
    for (var i = 1; i <= num; i++) {
        product *= i;
    }
    return product;
}
// console.log(factorial(5));

function fibonacci(arr)