import ButtonSave from "@/components/common/Buttons/ButtonSave";
import WriteInput from "@/components/common/Inputs/WriteInput/WriteInput";
import TableComponent from "@/components/common/Tables";
import React from "react";

export default function ControleEmpresas() {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <WriteInput content="" label="CNPJ" width="50%" placeHolder="CNPJ" />
                <WriteInput content="" label="*Nome" width="50%" placeHolder="*Nome" />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <WriteInput content="" label="Cidade" width="25%" placeHolder="Cidade" />
                <WriteInput content="" label="Estado" width="25%" placeHolder="Estado" />

                <WriteInput content="" label="Endereço" width="50%" placeHolder="Endereço" />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <WriteInput content="" label="E-mail Financeiro" width="50%" placeHolder="E-mail Financeiro" />
                <WriteInput content="" label="Contato Financeiro" width="50%" placeHolder="Contato Financeiro" />
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <ButtonSave />
            </div>

            <hr />

            <TableComponent
                dataTable={{
                    tHeadData: ["Empresa"],
                    tBodyData: [
                        ["001", "Protmar 01"],
                        ["002", "Protmar 02"],
                        ["003", "Protmar 03"]
                    ]
                }}

            />
        </>
    );
}