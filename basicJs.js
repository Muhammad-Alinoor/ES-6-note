function getResult(marks) {
    let result = 0;
    for (const mark of marks) {
        result += mark;
    }
    if (result >= 200)
        return result;
    else if (result <= 200)
        return "you are not eligible!";
    else
        return "we will recheck";
}
const gotNumber = [34, 75, 35, 86, 65, 46];
const std1 = getResult(gotNumber);
console.log(std1);