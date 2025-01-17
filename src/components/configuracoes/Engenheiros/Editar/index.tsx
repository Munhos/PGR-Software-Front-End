import ButtonSave from "@/components/common/Buttons/ButtonSave";
import MultiSelectInput from "@/components/common/Inputs/MultiSelectInput";
import SelecionableSearchInput from "@/components/common/Inputs/SelecionableSearchInput";
import WriteInput from "@/components/common/Inputs/WriteInput/WriteInput";
import React from "react";
import { Button } from "react-bootstrap";
import Select from "react-select/base";

export default function EditarEngenheiro() {
    return (
        <>
            <div style={{ display: "flex", width: "100" }}>
                <WriteInput content="" placeHolder="Nome" width="50%" label="Nome" />
                <WriteInput content="" placeHolder="Função" width="50%" label="Função" />
            </div>
            <div style={{ display: "flex", width: "100", alignItems: "center" }}>
                <WriteInput content="" placeHolder="Número CREA" width="49%" label="Número CREA" />
                <SelecionableSearchInput height="60px" value={["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"]} width="48.3%" placeHolder="Estado CREA" />
            </div>
            <div style={{ display: "flex", width: "100", alignItems: "center", justifyContent:"flex-end" }}>
                <ButtonSave />
            </div>
        </>
    )
}