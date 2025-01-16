import React from "react";
import NormalSearchInput from "../common/Inputs/NormalSearchInput";
import ButtonAdd from "../common/Buttons/ButtonAdd";
import ButtonClean from "../common/Buttons/ButtonClean";
import ButtonSearch from "../common/Buttons/ButtonSearch";
import TableComponent from "../common/Tables";
import Link from "next/link";

export default function InitialPageGes() {
    return (
        <div >
            <div style={{display: "flex", justifyContent: "space-between", marginBottom: "15px"}}>
                <div style={{display: "flex", width:"100%", gap: "15px"}}>
                    <NormalSearchInput width="30%" placeHolder="Pesquise por Código, GES ou Tipo PGR" />
                    <ButtonSearch type="button" />
                    <ButtonClean type="button" />
                </div>

                <Link href="/ges/novoges">
                    <ButtonAdd title="Cadastro de GES" />
                </Link>
            </div>

            <TableComponent
                dataTable={{
                    tHeadData: ["Código", "GES", "Tipo PGR"],
                    tBodyData: [["0001", "01", "Administrativo Agrícola", "PGRTR"],
                                ["0002", "02",  "Líder Agrícola", "PGRTR"],
                                ["0003", "03",  "Operador de Máquina Agrícola", "PGRTR"],
                                ["0004", "04",  "Auxiliar Agrícola", "PGRTR"],]
                }}
                route="/ges/editarges/"
            />
        </div>
    );
}