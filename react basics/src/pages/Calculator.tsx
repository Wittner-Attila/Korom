import { useState } from 'react';

const Calculator = () => {
    const [firstNumber, setFirstNumber] = useState<number>(0);
    const [secondNumber, setSecondNumber] = useState<number>(0);
    const [operation, setOperation] = useState<string>('+');
    const [result, setResult] = useState<number>(0);

    const calculate = () => {
        if (operation === '+') {
            setResult(firstNumber + secondNumber);
        } else if (operation === '-') {
            setResult(firstNumber - secondNumber);
        } else if (operation === '*') {
            setResult(firstNumber * secondNumber);
        } else if (operation === '/') {
            setResult(firstNumber / secondNumber);
        } else if (operation === '^') {
            setResult(Math.pow(firstNumber, secondNumber));
        }
    };

    return (
        <>
            <div>
                <h1>Calculator</h1>
                <input
                    type="number"
                    value={firstNumber}
                    onChange={(e) => {
                        setFirstNumber(Number(e.target.value));
                    }}
                />
                <select
                    onChange={(e) => {
                        setOperation(e.target.value);
                    }}
                    defaultValue={'+'}
                >
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                    <option value="^">^</option>
                </select>
                <input
                    type="number"
                    value={secondNumber}
                    onChange={(e) => {
                        setSecondNumber(Number(e.target.value));
                    }}
                />
                <button onClick={calculate}>Calculate</button>
            </div>
            <div>
                <h2>Result {result}</h2>
            </div>
        </>
    );
};

export default Calculator;
