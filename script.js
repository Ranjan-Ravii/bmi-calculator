const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const submit = document.querySelector('#submit');
const clear = document.querySelector('#clear');
const result = document.querySelector('.result');
const radio = document.querySelectorAll('input[type="radio"]');
const age = document.querySelector('#age')

console.log(radio);

function bmiCalculator() {
    const heightValue = parseFloat(height.value);  
    const weightValue = parseFloat(weight.value);
    if (heightValue > 0 && weightValue > 0) {
        const bmi = (weightValue / (heightValue * heightValue))*10000;
        return bmi.toFixed(2);
    } else {
        return "Invalid input";
    }
}

submit.addEventListener('click', function(e) {
    e.preventDefault();
    const bmi = bmiCalculator();
    result.innerHTML = bmi;
});

clear.addEventListener('click', function() {
    height.value = '';
    weight.value = '';
    result.innerHTML = '';
    age.value = '';
    radio.forEach(radioBtn => radioBtn.checked = false);  
});