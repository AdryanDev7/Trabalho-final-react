import React from 'react';
import styles from './Login.module.css';
import { login } from '../../service/apiService';
import  {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
//  {
//   "username": "admin@teste.com",
//   "password": "123456"
// }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulário submetido (apenas visual)");
  
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h2 className={styles.title}>Fazer Login</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="seuemail@exemplo.com"
              className={styles.inputField}
             
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              className={styles.inputField}
              
            />
          </div>
          <button type="submit" className={styles.loginButton}>
            Entrar
          </button>
        </form>
        <div className={styles.footerLinks}>
          <a href="#" className={styles.link}>Esqueci minha senha</a>
          <span className={styles.separator}>|</span>
          <a href="#" className={styles.link}>Criar conta</a>
        </div>
      </div>
    </div>
  );
};

export default Login;