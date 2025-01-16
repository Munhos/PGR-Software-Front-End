import React from "react";
import TableComponent from "@/components/common/Tables";
import NormalSearchInput from "@/components/common/Inputs/NormalSearchInput";
import styles from "./style.module.css";
import ButtonSearch from "@/components/common/Buttons/ButtonSearch";
import ButtonAdd from "@/components/common/Buttons/ButtonAdd";
import ButtonClean from "@/components/common/Buttons/ButtonClean";
import Link from "next/link";

export default function ParedeComponent() {
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

                <Link href="/cadastros/parede/novaparede">
                    <ButtonAdd
                        title="Cadastro de Nova Parede"
                    />
                </Link>


            </div>
            <TableComponent
                dataTable={{
                    tHeadData: ["Descrição"],
                    tBodyData: [
                        ["001", "Alvenaria"],
                        ["002", "Drywall"],
                        ["003", "Placas cimentícias"]
                    ]
                }}

                route="/cadastros/parede/editarparede/"
            />
        </div>
    );
}
