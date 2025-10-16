import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditPizza from './pages/EditPizza.tsx';
import NewPizza from './pages/NewPizza.tsx';
import PizzaPage from './pages/PizzaPage.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/new-pizza" element={<NewPizza />} />
                <Route path="/edit-pizza/:id" element={<EditPizza />} />
                <Route path="/pizza/:id" element={<PizzaPage />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);
