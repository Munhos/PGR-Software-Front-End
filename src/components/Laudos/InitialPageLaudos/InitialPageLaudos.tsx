import React from "react";
import NormalSearchInput from "@/components/common/Inputs/NormalSearchInput";
import SimpleInputSelect from "@/components/common/Inputs/ComboboxSelecionable";
import ButtonSearch from "@/components/common/Buttons/ButtonSearch";
import ButtonClean from "@/components/common/Buttons/ButtonClean";

import styles from "./style.module.css";
import TableComponent from "@/components/common/Tables";

export default function InitialPageLaudos() {
    return (
        <>
            <div className={styles.containerSeachOptions}>
                <NormalSearchInput width="20%" placeHolder="Laudos" />
                <SimpleInputSelect width="20%" options={["SEARA",
                    "JBS",
                    "Santa Terezinha",
                    "COOPERVAL COOPERATIVA AGROINDUSTRIAL VALE DO IVAI LTDA"]}
                    placeholder="Selecione um Cliente" />
                <ButtonSearch type="button" />
                <ButtonClean type="button" />
            </div>


            <TableComponent dataTable={{ tHeadData: ["Inclusão", "Nome", "Cliente", "Status"], tBodyData: [["0001", "01/01/2025 08:00", "Nome Genérico", "Cliente Genérico", "Ativo/Expirado"]] }} />
        </>
    );
}