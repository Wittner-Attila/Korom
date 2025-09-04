const calculate = () => {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;
    if (isNaN(weight) || isNaN(height) || height <= 0) {
        alert('Please enter valid weight and height values.');
        return;
    }
    const bmi = weight / (height * height);
    let result;
    if (bmi < 16) {
        result = 'Severely underweight';
    } else if (bmi < 17) {
        result = 'Underweight';
    } else if (bmi < 18.5) {
        result = 'Mildly underweight';
    } else if (bmi < 25) {
        result = 'Normal (healthy weight)';
    } else if (bmi < 30) {
        result = 'Overweight';
    } else if (bmi < 35) {
        result = 'Obese Class I (obese)';
    } else if (bmi < 40) {
        result = 'Obese Class II (Moderately obese)';
    } else {
        result = 'Obese Class III (Severely obese)';
    }
    console.log(bmi);
    console.log(result);
    document.getElementById('result').innerText = `${result}\nYour BMI is ${bmi.toFixed(2)}`;
};
