import React from 'react';
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  
  return (
    <nav className={styles.navbar}>
      
      <NavLink to="/" className={styles.logo}> Grupo 4</NavLink>
      <ul className={styles.navList}>
        <li>
          <NavLink
            to="/"
            className={styles.navLink}
            style={({ isActive }) => ({ 
              color: isActive ? 'var(--primary-color)' : 'var(--text-secondary)'
            })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/cadastro"
            className={styles.navLink}
            style={({ isActive }) => ({ 
              color: isActive ? 'var(--primary-color)' : 'var(--text-secondary)'
            })}
          >
            Cadastro
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/admin"
            className={styles.navLink} 
            style={({ isActive }) => ({ 
              color: isActive ? 'var(--primary-color)' : 'var(--text-secondary)'
            })}
          >
            Admin
          </NavLink>
        </li>
         <li>
          <NavLink 
            to="/login"
            className={styles.navLink} 
            style={({ isActive }) => ({ 
              color: isActive ? 'var(--primary-color)' : 'var(--text-secondary)'
            })}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};