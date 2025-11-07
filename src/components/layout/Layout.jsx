import React from 'react';
import { Outlet } from "react-router-dom"; 
import { Footer } from "./footer/Footer.jsx";
import { NavBar } from "./navbar/NavBar.jsx";
import styles from "./Layout.module.css";

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