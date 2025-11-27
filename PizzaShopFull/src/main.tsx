import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/NotFound';
import OverviewPage from './pages/OverviewPage';
import CreatePizzaPage from './pages/CreatePizzaPage';
import EditPizzaPage from './pages/EditPizzaPage';
import { Bounce, ToastContainer } from 'react-toastify';
import CartPage from './pages/CartPage';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<OverviewPage />} />
                <Route path="/new-pizza" element={<CreatePizzaPage />} />
                <Route path="/edit-pizza/:id" element={<EditPizzaPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
        <ToastContainer
            limit={3}
            position="top-right"
            autoClose={3000}
            hideProgressBar
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition={Bounce}
        />
    </StrictMode>,
);
