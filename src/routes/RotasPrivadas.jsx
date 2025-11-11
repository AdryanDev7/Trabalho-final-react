import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/layout/Layout.jsx';
import { Home } from '../pages/home/Home.jsx';
import { Cadastro } from '../pages/cadastro/Cadastro.jsx';
import { Admin } from '../pages/admin/Admin.jsx';

export const RotasPrivadas = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                
                <Route index element={<Home />} />
                <Route path="cadastro" element={<Cadastro />} />
                <Route path="admin" element={<Admin />} />
            </Route>
        </Routes>
    );
};