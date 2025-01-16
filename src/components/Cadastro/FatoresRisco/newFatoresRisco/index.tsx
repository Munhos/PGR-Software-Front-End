import ButtonAdd from "@/components/common/Buttons/ButtonAdd";
import ButtonSave from "@/components/common/Buttons/ButtonSave";
import SelecionableSearchInput from "@/components/common/Inputs/SelecionableSearchInput";
import WriteInput from "@/components/common/Inputs/WriteInput/WriteInput";
import React from "react";


export default function NewFatoresRisco() {
    return (
        <>
            <div>
                <div>
                    <div style={{ display: "flex", gap: "10px" }}>
                        <SelecionableSearchInput value={["Físico", "Químico", "Biológico", "Mecânico", "Ergonômico"]} height="60px" width="33%" placeHolder="Tipo" />
                        <WriteInput label="Ordem" content="" width="33%" placeHolder="Ordem" />
                        <WriteInput label="Código E-Social" content="" width="33%" placeHolder="Código E-Social" />
                    </div>
                    <div style={{ display: "flex" }}>
                        <WriteInput label="Descrição" content="" width="100%" placeHolder="Descrição" />
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <WriteInput label="Danos à saúde" content="" width="100%" placeHolder="Danos à saúde" />
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <WriteInput label="Técnica Utilizada" content="" width="33%" placeHolder="Técnica Utilizada" />
                        <WriteInput label="LT / LE" content="" width="33%" placeHolder="LT / LE" />
                        <WriteInput label="Nível de Ação" content="" width="33%" placeHolder="Nível de Ação" />
                    </div>
                    <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "15px" }}>
                        <ButtonSave />
                    </div>
                </div>
            </div>
        </>
    )
}