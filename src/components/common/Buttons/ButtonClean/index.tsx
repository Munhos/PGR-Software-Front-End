import React from "react";
import styles from "./style.module.css";

interface ButtonCleanProps {
    type: string;
}

export default function ButtonClean({ type }: ButtonCleanProps) {
    return (
        <div className={`${styles.buttonCleanContainer}`}
            >
            Limpar
        </div>

    );
}