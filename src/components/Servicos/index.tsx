import React from "react";
import NormalSearchInput from "../common/Inputs/NormalSearchInput";
import ButtonSearch from "../common/Buttons/ButtonSearch";
import ButtonClean from "../common/Buttons/ButtonClean";
import styles from './style.module.css';
import ButtonAdd from "../common/Buttons/ButtonAdd";
import TableComponent from "../common/Tables";

export default function InitialPageServicos() {
    return (
        <>
            <div className={styles.mainContainerInputs}>
                <div className={styles.divContainerInputs}>
                    <NormalSearchInput
                        width="300px"
                        placeHolder="Descrição, Dt de Início, Dt de Fim"
                    />

                    <ButtonSearch
                        type="button"
                    />

                    <ButtonClean
                        type="button"
                    />
                </div>
                <div>
                    <ButtonAdd type="button" />
                </div>
            </div>

            <TableComponent 
                dataTable={{
                    tHeadData: ["Descrição", "Dt de Início", "Dt de Fim"],
                    tBodyData: [["001", "Descrição", "Dt de Início", "Dt de Fim"]]
                }}
            />
        </>
    );
}