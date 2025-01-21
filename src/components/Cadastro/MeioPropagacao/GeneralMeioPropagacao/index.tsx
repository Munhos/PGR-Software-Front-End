import React from "react";
import TableComponent from "@/components/common/Tables";
import NormalSearchInput from "@/components/common/Inputs/NormalSearchInput";
import styles from "./style.module.css";
import ButtonSearch from "@/components/common/Buttons/ButtonSearch";
import ButtonAdd from "@/components/common/Buttons/ButtonAdd";
import ButtonClean from "@/components/common/Buttons/ButtonClean";
import Link from "next/link";

export default function MeiopropagacaoComponent() {
    return (
        <div>
            <div className={styles.mainContainerOptions}>
                <div className={styles.containerOptions}>

                    <NormalSearchInput
                        width="300px"
                        placeHolder="Pesquise por Descrição"
                    />

                    <ButtonSearch 
                        type="button"
                    />

                    <ButtonClean 
                        type="button"
                    />

                </div>

                <Link href="/cadastros/meiopropagacao/novomeiopropagacao">
                    <ButtonAdd
                        title="Cadastro de Meio de Propagacao"
                    />
                </Link>

            </div>
            <TableComponent
                dataTable={{
                    tHeadData: ["Descrição"],
                    tBodyData: [
                        ["001", " "],
                        ["002", " "],
                        ["003", " "]
                    ],
                }}

                route="/cadastros/meiopropagacao/editarmeiopropagacao/"
            />
        </div>
    );
}
