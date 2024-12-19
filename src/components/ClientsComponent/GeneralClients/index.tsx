import React from "react";
import TableComponent from "../../common/Tables";
import NormalSearchInput from "../../common/Inputs/NormalSearchInput";
import styles from "./style.module.css";
import ButtonSearch from "../../common/Buttons/ButtonSearch";
import ButtonAdd from "../../common/Buttons/ButtonAdd";
import ButtonClean from "../../common/Buttons/ButtonClean";
import Link from "next/link";

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

                <Link href="/clientes/novocliente">
                <ButtonAdd 
                        type="button"
                    />
                </Link>
                

            </div>
            <TableComponent
                dataTable={{
                    tHeadData: ["CNPJ", "Nome"],
                    tBodyData: [
                        ["00.000.000/0000-00", "Joaquim"],
                        ["00.000.000/0000-00", "Joaquim"],
                        ["00.000.000/0000-00", "Joaquim"],
                    ],
                    idsData: ["000aa1", "000aa2", "000aa3"],
                   
                }}
            />
        </div>
    );
}
