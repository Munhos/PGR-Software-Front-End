import React from "react";
import styles from "./style.module.css";
import NormalSearchInput from "@/components/common/Inputs/NormalSearchInput";
import SelecionableSearchInput from "@/components/common/Inputs/SelecionableSearchInput";

export default function NewClient() {
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
            <NormalSearchInput width="100px" placeHolder="Novo Cliente"/>
            <SelecionableSearchInput 
                value={["01", "01", "01"]}
            />
        </div>
    );
}