import React, { useState } from "react";
import TableComponent from "../../common/Tables";
import NormalSearchInput from "../../common/Inputs/NormalSearchInput";
import styles from "./style.module.css";
import ButtonSearch from "../../common/Buttons/ButtonSearch";
import ButtonAdd from "../../common/Buttons/ButtonAdd";
import ButtonClean from "../../common/Buttons/ButtonClean";
import Link from "next/link";

export default function ClientsComponent() {
    

    const [clients, setClients] = useState([
        ["001", "00.000.000/0000-00", "Joaquim"],
        ["002", "00.000.000/0000-00", "Joaquim"],
        ["003", "00.000.000/0000-00", "Joaquim"],
        ["004", "00.000.000/0000-00", "Joaquim"],
        ["005", "00.000.000/0000-00", "Joaquim"],
        ["006", "00.000.000/0000-00", "Joaquim"],
        ["007", "00.000.000/0000-00", "Joaquim"],
        ["008", "00.000.000/0000-00", "Joaquim"],
        ["009", "00.000.000/0000-00", "Joaquim"],
        ["0010", "00.000.000/0000-00", "Joaquim"],
        ["0011", "00.000.000/0000-00", "Joaquim"],
        ["0012", "00.000.000/0000-00", "Joaquim"],
        ["0013", "00.000.000/0000-00", "Joaquim"],
        


    ])
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
                    tBodyData: clients,
                }}
                route="/clientes/editarcliente/"
            />
        </div>
    );
}
