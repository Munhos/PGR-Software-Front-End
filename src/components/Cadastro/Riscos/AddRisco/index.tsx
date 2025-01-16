import ButtonSave from "@/components/common/Buttons/ButtonSave";
import SelecionableSearchInput from "@/components/common/Inputs/SelecionableSearchInput";
import WriteInput from "@/components/common/Inputs/WriteInput/WriteInput";
import React from "react";

export default function AddRisco() {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <SelecionableSearchInput width="49.5%" placeHolder="Fator de Risco" value={
                    ["Ruído Previdenciário", "Ácido Nítrico"]
                } />

                <SelecionableSearchInput width="49.5%" placeHolder="fonte Geradora" value={
                    ["Área Administrativa", "Trabalho com computadores na operação industrial"]
                } />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <WriteInput width="25%" label="Exposição" placeHolder="Exposição" content="" />
                <WriteInput width="25%" label="Meio de Propagação" placeHolder="Meio de Propagação" content="" />
                <WriteInput width="25%" label="Trajetória" placeHolder="Trajetória" content="" />
                <SelecionableSearchInput width="25%" placeHolder="Transmitir E-Social?" value={
                    ["Sim", "Não"]
                } />
            </div>

            <div style={{display:"flex", justifyContent:"space-between"}}>
                <WriteInput width="25%" label="LT / LE" placeHolder="LT / LE" content="" />
                <WriteInput width="25%" label="Nivel de Ação" placeHolder="Nivel de Ação" content="" />
                <WriteInput width="25%" label="Técnica Utilizada" placeHolder="Técnica Utilizada" content="" />
                <SelecionableSearchInput width="25%" placeHolder="Estratégia de Amostragem" value={
                    ["Preliminar", "Baseline"]
                } />
            </div>

            <div style={{display:"flex", justifyContent:"space-between"}}>
            <WriteInput width="25%" label="Probab. / Freq." placeHolder="Probab. / Freq." content="" />
            <WriteInput width="25%" label="Conseq. / Severidade" placeHolder="Conseq. / Severidade" content="" />
            <WriteInput width="25%" label="Grau de Risco" placeHolder="Grau de Risco" content="" />
            <SelecionableSearchInput width="25%" placeHolder="Classe de Risco" value={
                    ["Irrelevante", "Pequeno", "Tolerável", "Moderado", "Substancial", "Sério", "Critico"]
                } />
            </div>

            <WriteInput width="100%" label="Observações" placeHolder="Observações" content="" />

            <div style={{display:"flex", justifyContent:"space-between"}}>
            <WriteInput estado="disabled" width="33.3%" label="Intens. / Conc. (MG)" placeHolder="Intens. / Conc. (MG)" content="" />
            <WriteInput estado="disabled" width="33.3%" label="Desvio Padrão Geométrico (DPG)" placeHolder="Desvio Padrão Geométrico (DPG)" content="" />
            <WriteInput estado="disabled" width="33.3%" label="Percentil 95" placeHolder="Percentil 95" content="" />
            </div>

            <WriteInput width="100%" label="MEdidas de Controle" placeHolder="MEdidas de Controle" content="" />

            <div style={{display:"flex", justifyContent:"flex-end", marginTop:"15px"}}>
                <ButtonSave />
            </div>
        </>
    )
}