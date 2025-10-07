import { useState } from 'react';

const First = () => {
    const [textInput, setTextInput] = useState<number>(0);
    const [result, setResult] = useState<string>('');

    const showNumber = () => {
        setResult(`Result is ${textInput * 2}`);
    };

    return (
        <>
            <div>
                <h1>Hello World</h1>
                <h2>{result}</h2>
                <input type="number" onChange={(e) => setTextInput(Number(e.target.value))} />
            </div>
            <button onClick={showNumber}>x * 2</button>
        </>
    );
};

export default First;
