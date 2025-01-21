import React from "react";
import WriteInput from "../common/Inputs/WriteInput/WriteInput";
import SearchEquipamentoComponent from "../common/Inputs/ComboboxSelecionable";
import ButtonSave from "../common/Buttons/ButtonSave";

export default function AddAvaliação() {
    return (
        <>
            <div style={{ display: "flex" }}>
                <WriteInput width="33%" label="Data" placeHolder="Data" content="" />
                <SearchEquipamentoComponent width="50vw" selectPlaceholder="Trabalhador" options={[{ label: "Trabalhador 01", value: "Trabalhador 01" }, { label: "Trabalhador 02", value: "Trabalhador 02" }, { label: "Trabalhador 03", value: "Trabalhador 03" }]} />
            </div>

            <div style={{ display: "flex" }}>
                <WriteInput width="33.3%" label="Intens. / Conc." placeHolder="Intens. / Conc." content="" />
                <WriteInput width="33.3%" label="Histograma / Relatório do Ensaio" placeHolder="Histograma / Relatório do Ensaio" content="" />
                <WriteInput width="33.3%" label="Tempo de Exposição (min)" placeHolder="Tempo de Exposição (min)" content="" />
            </div>

            <div style={{width:"100%", display:"flex", justifyContent:"flex-end"}}>
                <ButtonSave />
            </div>
        </>
    )
}  