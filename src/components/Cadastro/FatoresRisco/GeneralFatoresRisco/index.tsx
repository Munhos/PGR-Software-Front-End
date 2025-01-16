import React from "react";
import Link from "next/link";
import NormalSearchInput from "@/components/common/Inputs/NormalSearchInput";
import ButtonSearch from "@/components/common/Buttons/ButtonSearch";
import ButtonClean from "@/components/common/Buttons/ButtonClean";
import ButtonAdd from "@/components/common/Buttons/ButtonAdd";
import TableComponent from "@/components/common/Tables";

export default function FatoresRiscoComponent() {
    return (
        <div >
            <div style={{display: "flex", justifyContent: "space-between", marginBottom: "15px"}}>
                <div style={{display: "flex", width:"100%", gap: "15px"}}>
                    <NormalSearchInput width="30%" placeHolder="Pesquise por Tipo ou Descrição" />
                    <ButtonSearch type="button" />
                    <ButtonClean type="button" />
                </div>

                <Link href="/cadastros/fatoresrisco/novofatoresrisco/">
                    <ButtonAdd title="Cadastro de GES" />
                </Link>
            </div>

            <TableComponent
                dataTable={{
                    tHeadData: ["Tipo", "Descrição"],
                    tBodyData: [["01", "Químico", "Bissulfito de Sódio"],
                                ["02", "Físico", "Calor"],
                                ["03", "Biologicos", "Animais Peçonhentos"],
                                ["04", "Químico","Ácido Nítrico"],]
                }}
                route="/cadastros/fatoresrisco/editarfatoresrisco/"
            />
        </div>
    );
}