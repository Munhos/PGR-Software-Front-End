import React, { useState } from "react";
import WriteInput from "@/components/common/Inputs/WriteInput/WriteInput";
import DateInput from "@/components/common/Inputs/DateInput";
import ButtonAddART from "@/components/common/Buttons/ButtonAddART";

import styles from "./style.module.css";
import ButtonSave from "@/components/common/Buttons/ButtonSave";

interface EditPageServicosProps {
    descricao: string;
    dataInicio: string;
    dataFim: string;
}

export default function EditPageServicos() {

    return (
        <div>
            <WriteInput label="Descrição" content="" width="100%" placeHolder="Descrição" />
            <div className={styles.divContainerInputs}>
                <DateInput width="30%"/>
                <DateInput width="30%"/>
                <ButtonAddART type="pdf" width="30%"/>
            </div>

            <div style={{display: "flex", justifyContent: "flex-end"}}>
                <ButtonSave />
            </div>
        </div>
    );
}