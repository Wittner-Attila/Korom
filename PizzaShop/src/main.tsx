import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PizzaPage from './pages/PizzaPage';
import NewPizza from './pages/NewPizza';
import EditPizza from './pages/EditPizza';
import PizzasPage from './pages/PizzasPage';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/pizzas" element={<PizzasPage />} />
                <Route path="/pizzas/:id" element={<PizzaPage />} />
                <Route path="/new" element={<NewPizza />} />
                <Route path="/edit/:id" element={<EditPizza />} />
                <Route path="*" element={<img src="https://www.httpcats.com/404.jpg" />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);
