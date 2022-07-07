const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const resultOutput = document.getElementById('result');
const getBmiBtn = document.getElementById('getBmiBtn');

getBmiBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let result;

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if (!weight || !height) {
        result = 'You passed incorrect values!';
    } else {
        const BMI = Math.round(weight / Math.pow(height / 100, 2) * 100) / 100;
        const category = getCategory(BMI);

        result = `
            <p>Your BMI is ${BMI} </p>
            <p>Your Category is ${category} </p>
        `
    }

    resultOutput.innerHTML = result;
});
