import ButtonAdd from "@/components/common/Buttons/ButtonAdd";
import SearchEquipamentoComponent from "@/components/common/Inputs/ComboboxSelecionable";
import MultiSelectInput from "@/components/common/Inputs/MultiSelectInput";
import SelecionableSearchInput from "@/components/common/Inputs/SelecionableSearchInput";
import WriteInput from "@/components/common/Inputs/WriteInput/WriteInput";
import TableComponent from "@/components/common/Tables";
import React from "react";

export default function EditGes() {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "40%" }}>
                <MultiSelectInput options={[{ label: "Matheus", value: "Matheus" }, { label: "Walter", value: "Walter" }, { label: "Cledson", value: "Cledson" }]} height="80px" width="90%" placeHolder="Funcionarios a Serem Adicionados" />
                <ButtonAdd title="Adicionar Funcionário" />
            </div>

            <div>
                <TableComponent
                    dataTable={{
                        tHeadData: ["Código", "Nome", "Cargo"],
                        tBodyData: [["001", "001", "Jorge", "Desenvolvedor"], ["002", "002", "Jorge", "Desenvolvedor"]]
                    }}

                    route="/trabalhadores/editartrabalhador/"
                />
            </div>

            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </>
    );
}