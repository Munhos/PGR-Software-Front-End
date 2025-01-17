import React from "react";
import NormalSearchInput from "../../common/Inputs/NormalSearchInput";
import ButtonSearch from "../../common/Buttons/ButtonSearch";
import ButtonClean from "../../common/Buttons/ButtonClean";
import styles from './style.module.css';
import ButtonAdd from "../../common/Buttons/ButtonAdd";
import TableComponent from "../../common/Tables";
import Link from "next/link";

export default function InitialPageServicos() {
    return (
        <>
            <div className={styles.mainContainerInputs}>
                <div className={styles.divContainerInputs}>
                    <NormalSearchInput
                        width="350px"
                        placeHolder="Pesquise por Descrição, Dt de Início, Dt de Fim"
                    />

                    <ButtonSearch
                        type="button"
                    />

                    <ButtonClean
                        type="button"
                    />
                </div>
                <Link href="/servico/novoservico">
                    <ButtonAdd title="Cadastro de Novo Serviço" />
                </Link>
            </div>

            <TableComponent 
                dataTable={{
                    tHeadData: ["Descrição", "Dt de Início", "Dt de Fim"],
                    tBodyData: [["001", "Descrição teste", "01/01/2025", "02/02/2025"]]
                }}
                route = "/servico/editarservico/"
            />
        </>
    );
}