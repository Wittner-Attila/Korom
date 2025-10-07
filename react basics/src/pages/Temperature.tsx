import { useEffect, useState } from 'react';

const Temperature = () => {
    const [celsius, setCelsius] = useState<number>(0);
    const [kelvin, setKelvin] = useState<number>(0);
    const [fahrenheit, setFahrenheit] = useState<number>(0);
    const [kelvinOutput, setKelvinOutput] = useState<string>('');
    const [fahrenheitOutput, setFahrenheitOutput] = useState<string>('');

    const calculate = () => {
        setKelvin(celsius + 273.15);
        setFahrenheit(celsius * 1.8 + 32);
    };

    useEffect(() => {
        setKelvinOutput(`${celsius}°C = ${kelvin} K`);
    }, [kelvin]);
    useEffect(() => {
        setFahrenheitOutput(`${celsius}°C = ${fahrenheit}°F`);
    }, [fahrenheit]);

    return (
        <>
            <div>
                <h1>Temperature Exchanger</h1>
                <label htmlFor="celsius">Celsius: </label>
                <input
                    type="number"
                    min={0}
                    name="celsius"
                    value={celsius}
                    onChange={(e) => {
                        setCelsius(Number(e.target.value));
                    }}
                />
                <button onClick={calculate}>Calculate</button>
            </div>
            <div>
                <h2>{kelvinOutput}</h2>
                <h2>{fahrenheitOutput}</h2>
            </div>
        </>
    );
};

export default Temperature;
