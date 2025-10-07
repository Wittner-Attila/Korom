import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import First from './pages/First.tsx';
import Calculator from './pages/Calculator.tsx';
import BMI from './pages/BMI.tsx';
import Temperature from './pages/Temperature.tsx';
import Currency from './pages/Currency.tsx';
import App from './App.tsx';
import NotFound from './pages/NotFound.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}></Route>
                <Route path="/first" element={<First />}></Route>
                <Route path="/calculator" element={<Calculator />}></Route>
                <Route path="/bmi" element={<BMI />}></Route>
                <Route path="/temperature" element={<Temperature />}></Route>
                <Route path="/currency" element={<Currency />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);
