import React from "react";
import Link from "next/link";
import styles from "./style.module.css";

interface ButtonNormalProps {
  texto: string;
  url: string;
  icone: string | React.ReactNode;
  showSideMenu: boolean;
}

export default function ButtonNormal({
  texto,
  url,
  icone,
  showSideMenu,
}: ButtonNormalProps) {
  return (
    <>
      {showSideMenu ? (
        <Link
          className={`${styles.link} ${styles.buttonNormalContainer}`}
          href={url}
        >
          <div className={styles.iconPrincipal}>
            {typeof icone === "string" ? <i className={icone}></i> : icone}
          </div>
          <div className={styles.link}>{texto}</div>
        </Link>
      ) : (
        <i
          style={{ margin: "10px" }}
          className={`${icone} ${styles.iconPrincipal}`}
        ></i>
      )}
    </>
  );
}
