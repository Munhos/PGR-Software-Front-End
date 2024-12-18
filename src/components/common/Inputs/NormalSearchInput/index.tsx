import React from "react";
import styles from "./style.module.css";

interface NormalSearchProps {
    width: string;
    placeHolder: string;
}

export default function NormalSearchInput({ width, placeHolder }: NormalSearchProps) {
    return (
        <div className={styles["input-wrapper"]} style={{ width }}>
            <input
                placeholder={placeHolder}
                className={`${styles.input} form-control`}
                type="text"
            />
        </div>
    );
}
