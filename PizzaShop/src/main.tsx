import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PizzaPage from './pages/PizzaPage';
import NewPizza from './pages/NewPizza';
import EditPizza from './pages/EditPizza';
import PizzasPage from './pages/PizzasPage';
import { Slide, ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PizzasPage />} />
                <Route path="/pizzas" element={<PizzasPage />} />
                <Route path="/pizzas/:id" element={<PizzaPage />} />
                <Route path="/new" element={<NewPizza />} />
                <Route path="/edit/:id" element={<EditPizza />} />
                <Route path="*" element={<img height={'99%'} src="https://http.cat/404.jpg" />} />
            </Routes>
        </BrowserRouter>
        <ToastContainer
            position="bottom-right"
            autoClose={3000}
            limit={3}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition={Slide}
        />
    </StrictMode>,
);
