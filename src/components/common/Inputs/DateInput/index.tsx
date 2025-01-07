import React from "react";
import styles from "./style.module.css";

interface DateInputProps {
    width: string;
}

export default function DateInput({ width }: DateInputProps) {
    return (
        <div className={styles.inputWrapper} style={{ width }}>
            <input type="date" name="" id="" />
        </div>
    )
}