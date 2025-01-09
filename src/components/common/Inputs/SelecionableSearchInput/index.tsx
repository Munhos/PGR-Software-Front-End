import React from "react";
import styles from "./style.module.css";

interface SelecionableSearchInputProps {
    width: string;
    value: string[];
    placeHolder: string;
    height?: string;
}

export default function SelecionableSearchInput({value, width, placeHolder, height}: SelecionableSearchInputProps) {
    return (
        <div style={{width}}>
            <select style={{height}} className={`${styles.select} form-select`} name="" id="">
                <option disabled selected>{placeHolder}</option>
                {
                    value.map((e, index) => (
                        <option value={e} key={index}>{e}</option>
                    ))
                }
            </select>
        </div>
    );
}