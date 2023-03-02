// Centimeter to meter: by using centimeterToMeter()

function centimeterToMeter(centimeter) {
    if (centimeter !== Number) {
        console.log('Please Enter a number.');
    }

    const meters = centimeter / 1000;
    return meters;


}

const centimeter = 10000;
const centimeters = centimeterToMeter(centimeter);
console.log(centimeter, 'centimeters =', centimeters, 'meters');