import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./style.module.css"; // Importa o arquivo de estilo
import "bootstrap-icons/font/bootstrap-icons.css"; // Importa o CSS dos ícones

interface ButtonSearchInitialPageProps {
  url: string;
  icon: string;
  arrow: string;
  text: string;
}

export default function ButtonSearchInitialPage({ url, icon, arrow, text }: ButtonSearchInitialPageProps) {
  return (
    <div className={`${styles.buttonSearchInitialPageContainer}`}>
      <i className={`${icon} ${styles.iconPrincipal}`}></i>
      <div className={styles.text}>{ text }</div>
      <i className={`${arrow} ${styles.iconSecundary}`}></i>
    </div>
  );
}
