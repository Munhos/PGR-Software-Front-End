import React from "react";
import Link from "next/link";
import styles from "./style.module.css";

interface ButtonNormalProps {
    texto: string;
    url: string;
    icone: string;
    showSideMenu: boolean;
}

export default function ButtonNormal({ texto, url, icone, showSideMenu }: ButtonNormalProps) {
    return (
        <>
            {
                showSideMenu ? (
                    <Link className={`${styles.link} ${styles.buttonNormalContainer}`} href={url}>

                        <i className={`${icone} ${styles.iconPrincipal}`}></i>
                        <Link className={styles.link} href={url}>{texto}</Link>

                    </Link>
                ) : (
                    <i style={{ margin: '10px' }} className={`${icone} ${styles.iconPrincipal}`}></i>
                )
            }
        </>


    );
}
