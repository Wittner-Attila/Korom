import { useEffect, useState } from 'react';

const BMI = () => {
    const [mass, setMass] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const [result, setResult] = useState<number>(0);
    const [output, setOutput] = useState<string>('');

    useEffect(() => {
        outputText();
    }, [result]);

    const calculate = () => {
        setResult(mass / (height / 100) ** 2);
    };

    const outputText = () => {
        if (result > 40) setOutput(`Morbidly Obese (III. class) \t ${result.toFixed(2)}`);
        else if (result > 35) setOutput(`Obese (II. class) \t ${result.toFixed(2)}`);
        else if (result > 30) setOutput(`Mildly Obese (I. class) \t ${result.toFixed(2)}`);
        else if (result > 25) setOutput(`Overweight \t ${result.toFixed(2)}`);
        else if (result > 18.5) setOutput(`Average Weight \t ${result.toFixed(2)}`);
        else if (result > 17) setOutput(`Mildly Underweight \t ${result.toFixed(2)}`);
        else if (result > 16) setOutput(`Underweight \t ${result.toFixed(2)}`);
        else setOutput(`Morbidly Underweight \t ${result.toFixed(2)}`);
    };

    return (
        <>
            <div>
                <h1>BMI Calculator</h1>
                <label htmlFor="mass">Body Mass: </label>
                <input
                    type="number"
                    min={0}
                    name="mass"
                    value={mass}
                    onChange={(e) => {
                        setMass(Number(e.target.value));
                    }}
                />
                <span>kg</span>
                <br />
                <br />
                <label htmlFor="height">Height: </label>
                <input
                    type="number"
                    min={0}
                    name="height"
                    value={height}
                    onChange={(e) => {
                        setHeight(Number(e.target.value));
                    }}
                />
                <span>cm</span>
                <br />
                <br />
                <button
                    onClick={() => {
                        calculate();
                    }}
                >
                    Calculate
                </button>
            </div>
            <div>
                <h2>{output}</h2>
            </div>
        </>
    );
};
export default BMI;
