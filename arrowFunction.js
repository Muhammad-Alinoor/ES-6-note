// Normal function to add number
// function name(parameter){ body };
function add(num1, num2) {
    return num1 + num2;
}
const sum = add(20, 40);
console.log(sum);
// convert the function into arrow function
add = (num1, num2) => num1 + num2;
const sum2 = add(20, 40);
console.log(sum2);

// multiline function using arrow function
const simple = (x, y, z) => {
    const firstStep = x + y;
    const secondStep = firstStep / z;
    const thirdStep = firstStep + secondStep;
    return thirdStep;
}
const result = simple(4, 6, 5);
console.log(result);
// no parameter function
const one = () => simple(3, 2, 2) + 7;
console.log(one());