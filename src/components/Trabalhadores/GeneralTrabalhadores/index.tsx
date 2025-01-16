import React from "react";
import TableComponent from "@/components/common/Tables";
import NormalSearchInput from "@/components/common/Inputs/NormalSearchInput";
import styles from "./style.module.css";
import ButtonSearch from "@/components/common/Buttons/ButtonSearch";
import ButtonAdd from "@/components/common/Buttons/ButtonAdd";
import ButtonClean from "@/components/common/Buttons/ButtonClean";
import Link from "next/link";

export default function EpiComponent() {
    return (
        <div>
            <div className={styles.mainContainerOptions}>
                <div className={styles.containerOptions}>

                    <NormalSearchInput
                        width="450px"
                        placeHolder="Pesquise por Código, Nome, CPF, Cargo, Gerência ou Setor"
                    />

                    <ButtonSearch
                        type="button"
                    />

                    <ButtonClean
                        type="button"
                    />

                </div>

                <Link href="/trabalhadores/novotrabalhador">
                    <ButtonAdd
                        title="Cadastro de Novo EPI"
                    />
                </Link>


            </div>
            <TableComponent
                dataTable={{
                    tHeadData: ["Código", "Nome", "Cargo"],
                    tBodyData: [
                      ["001", "001", "Jorge", "Desenvolvedor"],
                      ["002", "002", "Jorge", "Desenvolvedor"]
                    ]
                }}

                route="/trabalhadoreseditartrabalhador/"
            />
        </div>
    );
}
