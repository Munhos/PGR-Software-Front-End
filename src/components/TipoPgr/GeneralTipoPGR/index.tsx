import React from "react";
import TableComponent from "../../common/Tables"; 
import NormalSearchInput from "../../common/Inputs/NormalSearchInput"; 
import styles from "./style.module.css";
import ButtonSearch from "../../common/Buttons/ButtonSearch"; 
import ButtonAdd from "../../common/Buttons/ButtonAdd"; 
import ButtonClean from "../../common/Buttons/ButtonClean"; 

export default function PgrTypeComponent() {
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
                        ["PGR"],
                        ["PGRTR"],
                        ["PGRMIN"]
                    ],
                }}
            />
        </div>
    );
}
