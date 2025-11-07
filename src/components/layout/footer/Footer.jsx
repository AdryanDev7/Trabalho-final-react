import styles from "./Footer.module.css";

export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <p>
                <span className={styles.name}>Trabalho Final (Adryan, Fernanda, Victor, Hugo)</span> -  Serratec {year}
            </p>
        </footer>
    );
};