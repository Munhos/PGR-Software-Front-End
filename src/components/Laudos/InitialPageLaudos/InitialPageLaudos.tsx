import React from "react";
import NormalSearchInput from "@/components/common/Inputs/NormalSearchInput";
import SimpleInputSelect from "@/components/common/Inputs/ComboboxSelecionable";
import ButtonSearch from "@/components/common/Buttons/ButtonSearch";
import ButtonClean from "@/components/common/Buttons/ButtonClean";

import styles from "./style.module.css";
import TableComponent from "@/components/common/Tables";
import SearchEquipamentoComponent from "@/components/common/Inputs/ComboboxSelecionable";

export default function InitialPageLaudos() {
    return (
        <>
            <div className={styles.containerSeachOptions}>
                <NormalSearchInput width="20%" placeHolder="Laudos Gerados" />
                <div>
                    <SearchEquipamentoComponent width="100%" selectHeight="50px" options={[{ label: "SEARA", value: "SEARA" },
                    { label: "JBS", value: "JBS" },
                    { label: "Santa Terezinha", value: "Santa Terezinha" },
                    { label: "COOPERVAL COOPERATIVA AGROINDUSTRIAL VALE DO IVAI LTDA", value: "COOPERVAL COOPERATIVA AGROINDUSTRIAL VALE DO IVAI LTDA" }
                    ]}
                        placeholder="Selecione um Cliente" />
                </div>
                <ButtonSearch type="button" />
                <ButtonClean type="button" />
            </div>


            <TableComponent dataTable={{ tHeadData: ["Inclusão", "Nome", "Cliente", "Status"], tBodyData: [["0001", "01/01/2025 08:00", "Nome Genérico", "Cliente Genérico", "Ativo/Expirado"]] }} />
        </>
    );
}