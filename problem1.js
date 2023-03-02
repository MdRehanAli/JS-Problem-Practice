// Feet to inch convert: feetToInch()

function feetToInch(feet) {
    if (typeof feet !== Number) {
        console.log('Please Enter a number.');
    }

    const inches = feet * 12;
    return inches;

}

const feet = 5;
const feets = feetToInch(feet);
console.log(feet, 'feet =', feets, 'inches.');