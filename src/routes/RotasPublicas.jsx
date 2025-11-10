import { Routes, Route } from 'react-router-dom';
import Login from '../pages/login/Login.jsx';


export const RotasPublicas = () => {
    return (
        <Routes > 
            <Route path="/login" element={<Login />} />
        </Routes>
    );
};