import Link from "next/link";
import React from "react";
import styles from "./style.module.css";
import { useRouter } from "next/router";

interface ButtonReturnProps {
    text: string;
    
}

export default function ButtonReturn({ text }: ButtonReturnProps) {

    const router = useRouter();
    const back = () => {
        router.back();
    }

    return (
        <div className={`${styles.buttonReturnContainer}`}>
            <div className={`${styles.iconReturnContainer}`}>
                <button className={styles.link} onClick={back}>
                    <i className={`bi bi-arrow-left ${styles.iconReturn}`} ></i>
                </button>
            </div>
            <h4 className={styles.text}>{text}</h4>
        </div>
    );
}


