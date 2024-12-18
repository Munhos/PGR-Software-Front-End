import React from "react";
import styles from "./style.module.css";

interface SelecionableSearchInputProps {
    width: string;
    value: string[];
    placeHolder: string
}

export default function SelecionableSearchInput({value, width, placeHolder}: SelecionableSearchInputProps) {
    return (
        <div style={{width}}>
            <select className={`${styles.select} form-select`} name="" id="">
                <option selected>{placeHolder}</option>
                {
                    value.map((e, index) => (
                        <option value={e} key={index}>{e}</option>
                    ))
                }
            </select>
        </div>
    );
}