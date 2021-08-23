// set default value of num1 and  num2 by assign 0
// if num1 doesn't get any value . it will hold 0 as it set as default value of num1
// if num2 doesn't get any value . it will hold 0 as it set as default value of num2
function add(num1 = 0, num2 = 0) { // default value of num1 and num2 is 0 when they are undefined
    let sum = num1 + num2;
    return sum;
}
const result = add(42);// pass one parameter only to check second  parameter default value
console.log(result);
let n;
const result1 = add(n, 42);
console.log(result1);