import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OverviewPage from './pages/OverviewPage';
import CartPage from './pages/CartPage';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<OverviewPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route
                    path="*"
                    element={<h1 style={{ fontSize: '10rem', textAlign: 'center' }}>404</h1>}
                />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);
