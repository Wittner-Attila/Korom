import { useEffect, useState } from 'react';

const Currency = () => {
    const [money, setMoney] = useState<number>(0);
    const [currency, setCurrency] = useState<string>('$');
    const [result, setResult] = useState<number>(0);
    const [output, setOutput] = useState<string>('');

    const USDRate = 0.003;
    const EURRate = 0.0026;
    const GBPRate = 0.0022;
    const JPYRate = 0.44;

    const calculate = () => {
        if (currency === '$') {
            setResult(money * USDRate);
        } else if (currency === '€') {
            setResult(money * EURRate);
        } else if (currency === '£') {
            setResult(money * GBPRate);
        } else if (currency === '¥') {
            setResult(money * JPYRate);
        }
    };

    useEffect(() => {
        setOutput(`${result.toFixed(2)} ${currency}`);
    }, [result]);

    return (
        <>
            <div>
                <h1>Currency Exchanger</h1>
                <label htmlFor="money">Money: </label>
                <input
                    type="number"
                    min={0}
                    name="money"
                    value={money}
                    onChange={(e) => {
                        setMoney(Number(e.target.value));
                    }}
                />
                <span>Ft - </span>
                <select
                    value={currency}
                    onChange={(e) => {
                        setCurrency(e.target.value);
                    }}
                >
                    <option value="$">$</option>
                    <option value="€">€</option>
                    <option value="£">£</option>
                    <option value="¥">¥</option>
                </select>
                <br />
                <button onClick={calculate}>Calculate</button>
            </div>
            <div>
                <h2>{output}</h2>
            </div>
        </>
    );
};

export default Currency;
