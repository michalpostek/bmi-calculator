const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const resultOutput = document.getElementById('result');
const getBmiBtn = document.getElementById('getBmiBtn');

getBmiBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    const BMI = weight / Math.pow(height / 100, 2);

    resultOutput.innerHTML = `
        <p>Your BMI is ${BMI} </p>
        <p>Your Category is ${Category} </p>
    `;
});
