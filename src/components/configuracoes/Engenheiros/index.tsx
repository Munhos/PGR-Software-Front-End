import ButtonAdd from "@/components/common/Buttons/ButtonAdd";
import ButtonClean from "@/components/common/Buttons/ButtonClean";
import ButtonSearch from "@/components/common/Buttons/ButtonSearch";
import NormalSearchInput from "@/components/common/Inputs/NormalSearchInput";
import TableComponent from "@/components/common/Tables";
import Link from "next/link";
import React from "react";

export default function Engenheiros() {
    return (
        <>
            <div style={{width:"100%", display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
                <div style={{width:"40%", display:"flex", gap:"15px"}}>
                    <NormalSearchInput width="65%" placeHolder="Pesquise por Nome ou Função" />
                    <ButtonSearch type="button" />
                    <ButtonClean type="button" />
                </div>

                <Link href="/configuracoes/engenheiros/novo">
                    <ButtonAdd title="Cadastro de Engenheiros" />
                </Link>
            </div>

            <div>
            <TableComponent
                dataTable={{
                    tHeadData: ["Nome", "Função"],
                    tBodyData: [["0001", "Engenheiro A", "Engenheiro Cívil"],
                                ["0002", "Engenheiro B", "Engenheiro Eletrônico"],
                                ["0003", "Engenheiro C", "Engenheiro Mecânico"],
                                ["0004", "Engenheiro D", "Engenheiro Mecânico"],]
                }}
                route="/configuracoes/engenheiros/editar/"
            />
            </div>
        </>
    )
}