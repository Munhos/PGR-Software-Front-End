import ButtonAdd from "@/components/common/Buttons/ButtonAdd";
import SearchEquipamentoComponent from "@/components/common/Inputs/ComboboxSelecionable";
import SimpleInputSelect from "@/components/common/Inputs/ComboboxSelecionable";
import TableComponent from "@/components/common/Tables";
import Link from "next/link";
import React from "react";

export default function InitialPageTrabalhadores() {
    const handleSelectChange = (selectedOption: { label: string; value: string } | null) => {
        console.log("Selecionado:", selectedOption);
    };

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <SearchEquipamentoComponent
                    options={[
                        { label: "SEARA", value: "SEARA" },
                        { label: "JBS", value: "JBS" },
                        { label: "Santa Terezinha", value: "Santa Terezinha" },
                        { label: "COOPERVAL COOPERATIVA AGROINDUSTRIAL VALE DO IVAI LTDA", value: "COOPERVAL COOPERATIVA AGROINDUSTRIAL VALE DO IVAI LTDA" }
                    ]}
                    selectPlaceholder="Selecione um Cliente"
                    selectOnChange={handleSelectChange}

                />                <div style={{ marginLeft: "15px" }}>

                 <Link href="/trabalhadores/novotrabalhador">
                    <ButtonAdd type="button" />
                 </Link>   
                </div>
            </div>

            <TableComponent
                dataTable={{
                    tHeadData: ["Código", "Nome", "Cargo"],
                    tBodyData: [["001", "001", "Jorge", "Desenvolvedor"], ["002", "002", "Jorge", "Desenvolvedor"]]
                }}

                route="/trabalhadores/editartrabalhador/"
            />
        </>
    )
}