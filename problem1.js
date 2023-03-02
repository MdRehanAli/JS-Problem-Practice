// Feet to inch convert: feetToInch()

function feetToInch(feet) {
    if (typeof feet !== 'number') {
        return 'Please Enter a number.';
    }

    const inches = feet * 12;
    return inches;

}

const feet = 5;
const feets = feetToInch(feet);
console.log(feets);