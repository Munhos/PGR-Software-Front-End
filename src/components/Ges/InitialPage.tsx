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
                    <NormalSearchInput width="30%" placeHolder="Pesquise por Código ou Cargo" />
                    <ButtonSearch type="button" />
                    <ButtonClean type="button" />
                </div>

                <Link href="/ges/novoges">
                    <ButtonAdd type="button" />
                </Link>
            </div>

            <TableComponent
                dataTable={{
                    tHeadData: ["Código", "Cargo"],
                    tBodyData: [["0001", "0001", "Engenheiro Cívil"],
                                ["0002", "0002", "Engenheiro Eletrônico"],
                                ["0003", "0003", "Engenheiro Mecânico"],
                                ["0004", "0004", "Engenheiro Mecânico"],]
                }}
            />
        </div>
    );
}