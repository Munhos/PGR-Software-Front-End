import Link from "next/link";
import React from "react";
import styles from "./style.module.css";

interface ButtonReturnProps {
    text: string;
    url: string;
}

export default function ButtonReturn({ text, url }: ButtonReturnProps) {
    return (
        <div className={`${styles.buttonReturnContainer}`}>
            <div className={`${styles.iconReturnContainer}`}>
                <Link className={styles.link} href={url ? url : "/"}>
                    <i className={`bi bi-arrow-left ${styles.iconReturn}`} ></i>
                </Link>
            </div>
            <h4 className={styles.text}>{text}</h4>
        </div>
    );
}


