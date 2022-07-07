const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');

const resultTable = document.getElementById('resultTable');
const bmiOutput = document.getElementById('bmiOutput');
const categoryOutput = document.getElementById('categoryOutput');
const errorOutput = document.getElementById('error')

const getBmiBtn = document.getElementById('getBmiBtn');
const clearBtn = document.getElementById('clearBtn');

getBmiBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if (!weight || !height) {
        resultTable.classList.add('hidden');
        errorOutput.classList.remove('hidden');

        errorOutput.textContent = 'You passed incorrect values';
    } else {
        const BMI = Math.round(weight / Math.pow(height / 100, 2) * 100) / 100;
        const category = getCategory(BMI);

        resultTable.classList.remove('hidden');
        errorOutput.classList.add('hidden');

        bmiOutput.textContent = BMI;
        categoryOutput.textContent = category;
    }
});

clearBtn.addEventListener('click', () => {
    weightInput.value = '';
    heightInput.value = '';
    
    errorOutput.classList.add('hidden');
    resultTable.classList.add('hidden');
});
