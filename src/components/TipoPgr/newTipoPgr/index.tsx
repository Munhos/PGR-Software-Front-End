import React from "react";
import styles from "./style.module.css";
import NormalSearchInput from "@/components/common/Inputs/NormalSearchInput";

export default function NewPgrType() {
    return (
        <div className={styles.container}>
            <div className={styles.divContainerInputs}></div>
            <div className={styles.divContainerInputs}></div>
            <div className={styles.divContainerInputs}></div>
            <div className={styles.divContainerInputs}></div>
            <div className={styles.divContainerInputs}></div>
            <div className={styles.divContainerInputs}></div>
            <div className={styles.divContainerInputs}></div>
            <div className={styles.divContainerInputs}></div>
            <div className={styles.divContainerInputs}></div>
            <div className={styles.divContainerInputs}></div>
            <NormalSearchInput width="100px" placeHolder="Descrição"/>

        </div>
    );
}