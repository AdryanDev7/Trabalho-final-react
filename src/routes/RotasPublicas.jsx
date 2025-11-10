import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login } from '../pages/login/Login.jsx';

export const RotasPublicas = () => {
    return (
        <Routes path="/" element={<Layout />}> 
            <Route path="/login" element={<Login />} />
        </Routes>
    );
};