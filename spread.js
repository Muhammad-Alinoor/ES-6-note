const findMax = (arrayOfNumber) => {
    const max = Math.max(...arrayOfNumber);
    return max;
}
const numbers = [45, 65, 75, 3, 547, 97, 634, 376, 7876, 46.3, 6534, 2, 565, 34, 3653, 53, 5635, 6356, 563, 563, 63, 5635, 635, 6];


const index = numbers.indexOf(7876);
console.log(index);
numbers[8] = 4565;
const getIt = findMax(numbers);
console.log(getIt);