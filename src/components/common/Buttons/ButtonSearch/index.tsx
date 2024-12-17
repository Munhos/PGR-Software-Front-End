import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './style.module.css'; // Importa o arquivo de estilo
import 'bootstrap-icons/font/bootstrap-icons.css'; // Importa o CSS dos ícones

interface ButtonSearchProps {
    type: string;
}

export default function ButtonSearch({ type }: ButtonSearchProps) {
    return (
        <div className={`${styles.buttonSearchContainer}`}>
            <i className={`bi bi-search ${styles.iconSearch}`}></i>
        </div>
    )
}