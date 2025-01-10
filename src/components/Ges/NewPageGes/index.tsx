import ButtonAdd from "@/components/common/Buttons/ButtonAdd";
import MultiSelectInput from "@/components/common/Inputs/MultiSelectInput";
import SelecionableSearchInput from "@/components/common/Inputs/SelecionableSearchInput";
import WriteInput from "@/components/common/Inputs/WriteInput/WriteInput";
import TableComponent from "@/components/common/Tables";
import Link from "next/link";
import React from "react";


export default function NewPageGes() {
    return (
        <>
            <div>
                <div>
                    <div style={{ display: "flex" }}>
                        <WriteInput label="Código" content="" width="30%" placeHolder="Código" />
                        <WriteInput label="Descrição GES" content="" width="70%" placeHolder="Descrição GES" />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <MultiSelectInput options={[{ label: "001", value: "001" }, { label: "002", value: "002" }, { label: "003", value: "003" }]} height="80px" width="32.5%" placeHolder="Req. Ativ. Crítica (RAC)" />
                        <MultiSelectInput options={[{ label: "001", value: "001" }, { label: "002", value: "002" }, { label: "003", value: "003" }]} height="80px" width="32.5%" placeHolder="Cursos Obrigatórios" />
                        <MultiSelectInput options={[{ label: "001", value: "001" }, { label: "002", value: "002" }, { label: "003", value: "003" }]} height="80px" width="32.5%" placeHolder="EPI Obrigatório" />
                    </div>
                    <div style={{ display: "flex" }}>
                        <WriteInput label="Observação" content="" width="100%" placeHolder="Observação" />
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <WriteInput label="Caracterização dos Processos" content="" width="100%" placeHolder="Caracterização dos Processos" />
                        <Link href="/">
                            <ButtonAdd type="button" />
                        </Link>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <WriteInput label="Caracterização dos Ambientes de Trabalho" content="" width="100%" placeHolder="Caracterização dos Ambientes de Trabalho" />
                        <Link href="/">
                            <ButtonAdd type="button" />
                        </Link>
                    </div>
                    <div style={{ display: "flex" }}>
                        <WriteInput label="Responsável" content="" width="50%" placeHolder="Responsável" />
                        <WriteInput label="Cargo" content="" width="50%" placeHolder="Cargo" />
                    </div>
                    <div style={{ display: "flex" }}>
                        <MultiSelectInput options={[{ label: "001", value: "001" }, { label: "002", value: "002" }, { label: "003", value: "003" }]} height="80px" width="100%" placeHolder="Tipo PGR" />
                    </div>
                    <div style={{ display: "flex", gap:"15px", alignItems:"center" }}>
                        <MultiSelectInput options={[{ label: "001", value: "001" }, { label: "002", value: "002" }, { label: "003", value: "003" }]} height="80px" width="100%" placeHolder="Trabalhadores" />
                        <ButtonAdd type="button" />
                    </div>
                </div>

                <TableComponent
                dataTable={{
                    tHeadData: ["Código", "Nome", "Cargo"],
                    tBodyData: [["001", "001", "Jorge", "Desenvolvedor"], ["002", "002", "Jorge", "Desenvolvedor"]]
                }}

                route="/trabalhadores/editartrabalhador/"
            />
            </div>
        </>
    )
}