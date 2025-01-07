import React from "react";
import TableComponent from "@/components/common/Tables";
import NormalSearchInput from "@/components/common/Inputs/NormalSearchInput";
import styles from "./style.module.css";
import ButtonSearch from "@/components/common/Buttons/ButtonSearch";
import ButtonAdd from "@/components/common/Buttons/ButtonAdd";
import ButtonClean from "@/components/common/Buttons/ButtonClean";

export default function GerenciaComponent() {
    return (
        <div>
            <div className={styles.mainContainerOptions}>
                <div className={styles.containerOptions}>

                    <NormalSearchInput
                        width="300px"
                        placeHolder="Descrição"
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
                    tHeadData: ["Descrição"],
                    tBodyData: [
                        ["001", "Gerência de Operações"],
                        ["002", "Gerência de Fabricação"],
                        ["003", "Gerência de Engenharia"]
                    ]
                }}
            />
        </div>
    );
}
