import React from "react";
import TableComponent from "../../common/Tables";
import NormalSearchInput from "../../common/Inputs/NormalSearchInput";
import styles from "./style.module.css";
import ButtonSearch from "../../common/Buttons/ButtonSearch";
import ButtonAdd from "../../common/Buttons/ButtonAdd";
import ButtonClean from "../../common/Buttons/ButtonClean";

export default function ClientsComponent() {
    return (
        <div>
            <div className={styles.mainContainerOptions}>
                <div className={styles.containerOptions}>

                    <NormalSearchInput
                        width="300px"
                        placeHolder="Pesquise por CNPJ ou Nome"
                    />

                    <ButtonSearch 
                        type="button"
                    />

                    <ButtonClean 
                        type="button"
                    />

                </div>

                <ButtonAdd 
                        type="button"
                    />

            </div>
            <TableComponent
                dataTable={{
                    tHeadData: ["CNPJ", "Nome"],
                    tBodyData: [
                        ["00.000.000/0000-00", "Joaquim"],
                        ["00.000.000/0000-00", "Joaquim"],
                        ["00.000.000/0000-00", "Joaquim"]
                    ],
                }}
            />
        </div>
    );
}
