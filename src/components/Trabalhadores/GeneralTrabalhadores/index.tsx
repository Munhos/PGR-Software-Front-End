import ButtonAdd from "@/components/common/Buttons/ButtonAdd";
import SimpleInputSelect from "@/components/common/Inputs/ComboboxSelecionable";
import React from "react";

export default function InitialPageTrabalhadores() {
    return(
        <>
            <div style={{display: "flex", alignItems: "center"}}>
                <SimpleInputSelect width="20%" options={["SEARA","JBS","Santa Terezinha","COOPERVAL COOPERATIVA AGROINDUSTRIAL VALE DO IVAI LTDA"]} placeholder="Selecione um Cliente" />
                <div style={{marginLeft:"15px"}}>
                    <ButtonAdd type="button" />
                </div>
            </div>
        </>
    )
}