// onlyPositive(): [45, 87, 96, 11, 63, -56, 71, 28]; this number put under an array until a negative number comes.

function onlyPositive(numbers) {

    let positiveNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];

        if (element < 0) {
            break;
        }
        positiveNumbers.push(element);

    }
    return positiveNumbers;

}

const numbers = [45, 87, 96, 11, 63, -56, 71, 28];
const number = onlyPositive(numbers);
console.log(number);