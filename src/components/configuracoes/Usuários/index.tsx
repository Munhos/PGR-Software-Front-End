import ButtonAdd from "@/components/common/Buttons/ButtonAdd";
import ButtonClean from "@/components/common/Buttons/ButtonClean";
import ButtonSearch from "@/components/common/Buttons/ButtonSearch";
import NormalSearchInput from "@/components/common/Inputs/NormalSearchInput";
import TableComponent from "@/components/common/Tables";
import Link from "next/link";
import React from "react";
import { Button } from "react-bootstrap";

export default function Usuarios() {
    return (
        <>
            <div style={{display:"flex", width:"100%", gap:"10px", justifyContent:"space-between", marginBottom:"15px"}}>
                <div style={{display:"flex", width:"80%", gap:"10px"}}>
                    <NormalSearchInput width="30%" placeHolder="Pesquise por Código ou Cargo" />
                    <ButtonSearch type="button" />
                    <ButtonClean type="button" />
                </div>
                <Link href="/configuracoes/usuarios/novo">
                    <ButtonAdd title="Cadastro de Usuários" />
                </Link>
            </div>

            <TableComponent 
                dataTable={{
                    tHeadData: ["Nome", "Email"],
                    tBodyData: [
                        ["0001", "Julio Cesar Correa", "julio@protmar.com"],
                        ["0002", "Carlos Eduardo", "carlos@protmar.com"],
                        ["0003", "Renan Sanches", "renan@protmar.com"],
                        ["0004", "Diego", "diego@protmar.com"],
                    ]
                }}
                route="/configuracoes/usuarios/editar/"
            />
        </>
    )
}