import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./style.module.css"; // Importa o arquivo de estilo
import "bootstrap-icons/font/bootstrap-icons.css"; // Importa o CSS dos ícones

interface ButtonAddProps {
  title: string;
}

export default function ButtonEdit({ title }: ButtonAddProps) {
  return (
    <div title={title} className={`${styles.buttonAddContainer}`}>
      <i className={`bi bi-pencil-fill ${styles.iconAdd}`}></i>
    </div>
  );
}
