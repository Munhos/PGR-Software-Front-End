import React from "react";
import styles from "./style.module.css";

interface SelecionableSearchInputProps {
    value: string[];
}

export default function SelecionableSearchInput({value}: SelecionableSearchInputProps) {
    return (
        <div>
            <select className={`${styles.select} form-select`} name="" id="">
                <option selected>Selecione uma opção</option>
                {
                    value.map((e, index) => (
                        <option value={e} key={index}>{e}</option>
                    ))
                }
            </select>
        </div>
    );
}