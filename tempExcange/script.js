const calculate = () => {
    const celsius = parseInt(document.getElementById('celsius').value) || 0;
    console.log(celsius);
    const fahrenheit = celsius * 1.8 + 32;
    document.getElementById('fahrenheit').textContent = `${celsius}°C = ${fahrenheit}°F`;
    const kelvin = parseFloat(celsius) + 273.15;
    document.getElementById('kelvin').textContent = `${celsius}°C = ${kelvin} K`;
};
