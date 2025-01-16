import React from "react";
import WriteInput from "@/components/common/Inputs/WriteInput/WriteInput";
import DateInput from "@/components/common/Inputs/DateInput";
import ButtonAddART from "@/components/common/Buttons/ButtonAddART";

import styles from "./style.module.css";
import ButtonSave from "@/components/common/Buttons/ButtonSave";


export default function NewPageServicos() {
    return (
        <div>
            <WriteInput label="Descrição" content="" width="100%" placeHolder="Descrição" />
            <div className={styles.divContainerInputs}>
                <div style={{ width: "30%" }}>
                    <h6>Data de Início</h6>
                    <DateInput width="100%" />
                </div>

                <div style={{ width: "30%" }}>
                    <h6>Data de Fim</h6>
                    <DateInput width="100%" />
                </div>
                <ButtonAddART type="pdf" width="30%" />
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <ButtonSave />
            </div>
        </div>
    );
}