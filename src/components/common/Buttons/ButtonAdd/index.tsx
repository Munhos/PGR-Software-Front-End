import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./style.module.css"; // Importa o arquivo de estilo
import "bootstrap-icons/font/bootstrap-icons.css"; // Importa o CSS dos ícones

interface ButtonAddProps {
  type: string;
}

export default function ButtonAdd({ type }: ButtonAddProps) {
  return (
    <div className={`${styles.buttonAddContainer}`}>
      <i className={`bi bi-plus ${styles.iconAdd}`}></i>
    </div>
  );
}
