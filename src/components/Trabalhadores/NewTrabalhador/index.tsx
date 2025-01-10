import ButtonSave from "@/components/common/Buttons/ButtonSave";
import DateInput from "@/components/common/Inputs/DateInput";
import SelecionableSearchInput from "@/components/common/Inputs/SelecionableSearchInput";
import WriteInput from "@/components/common/Inputs/WriteInput/WriteInput";
import React from "react";

export default function NewTrabalhador() {
    return (
        <>
            <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <WriteInput label="Código" content="" width="20%" placeHolder="Código" />
                    <WriteInput label="Nome" content="" width="50%" placeHolder="Nome" />
                    <SelecionableSearchInput value={["Masculino", "Feminino"]} height="60px" width="30%" placeHolder="Gênero" />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <WriteInput label="Data de Nascimento" content="" width="33.3%" placeHolder="Data de Nascimento" />
                    <WriteInput label="CPF" content="" width="33.3%" placeHolder="CPF" />
                    <WriteInput label="RG" content="" width="33.3%" placeHolder="RG" />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <WriteInput label="NIS/PIS" content="" width="30%" placeHolder="NIS/PIS" />
                    <WriteInput label="CTPS" content="" width="20%" placeHolder="CTPS" />
                    <WriteInput label="Série" content="" width="20%" placeHolder="Série" />
                    <SelecionableSearchInput value={[
                        "AC", // Acre
                        "AL", // Alagoas
                        "AP", // Amapá
                        "AM", // Amazonas
                        "BA", // Bahia
                        "CE", // Ceará
                        "DF", // Distrito Federal
                        "ES", // Espírito Santo
                        "GO", // Goiás
                        "MA", // Maranhão
                        "MT", // Mato Grosso
                        "MS", // Mato Grosso do Sul
                        "MG", // Minas Gerais
                        "PA", // Pará
                        "PB", // Paraíba
                        "PR", // Paraná
                        "PE", // Pernambuco
                        "PI", // Piauí
                        "RJ", // Rio de Janeiro
                        "RN", // Rio Grande do Norte
                        "RS", // Rio Grande do Sul
                        "RO", // Rondônia
                        "RR", // Roraima
                        "SC", // Santa Catarina
                        "SP", // São Paulo
                        "SE", // Sergipe
                        "TO"  // Tocantins
                    ]} height="60px" width="30%" placeHolder="UF" />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <WriteInput label="Gerência" content="" width="50%" placeHolder="Gerência" />
                    <WriteInput label="Cargo" content="" width="50%" placeHolder="Cargo" />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <WriteInput label="Setor" content="" width="50%" placeHolder="Setor" />
                    <WriteInput label="Jornada de Trabalho (min)" content="" width="50%" placeHolder="Jornada de Trabalho (min)" />
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <ButtonSave />
                </div>
            </div>
        </>
    );
}