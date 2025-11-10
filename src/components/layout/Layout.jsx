import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Footer } from "./footer/Footer.jsx";
import { NavBar } from "./navbar/NavBar.jsx";
import styles from "./Layout.module.css";
import Login from '../../pages/login/Login.jsx';
import {Home} from '../../pages/home/Home.jsx';

export const Layout = () => {
    return (
        <div className={styles.layout}>
            <NavBar />
            <main className={styles.mainContent}>
                <Outlet />
            </main>
            
            <Footer />
        </div>
    )
}