const getCategory = (BMI) => {
    if (BMI < 18.5) {
        return 'Underweight';
    } else if (BMI < 25) {
        return 'Healthy weight';
    } else if (BMI < 30) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}
