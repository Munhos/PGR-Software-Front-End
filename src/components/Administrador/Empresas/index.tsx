import ButtonAddImage from "@/components/common/Buttons/ButtonAddImageLogo";
import ButtonSave from "@/components/common/Buttons/ButtonSave";
import WriteInput from "@/components/common/Inputs/WriteInput/WriteInput";
import React from "react";

export default function Empresa() {
    return (
        <>
            <div style={{ display: "flex" }}>
                <WriteInput content="" label="CNPJ" width="50%" placeHolder="CNPJ" />
                <WriteInput content="" label="Nome da Empresa" width="50%" placeHolder="Nome da Empresa" />
            </div>
            <div style={{ display: "flex" }}>
                <WriteInput content="" label="E-mail" width="70%" placeHolder="E-mail" />
                <WriteInput content="" label="Numero CREA" width="30%" placeHolder="Numero CREA" />
            </div>
            <div style={{ display: "flex" }}>
                <WriteInput content="" label="Endereço" width="100%" placeHolder="Endereço" />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <WriteInput content="" label="Telefone" width="50%" placeHolder="Telefone" />
                <div style={{width:"50%"}}>
                    <ButtonAddImage name="Logo" />
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <ButtonSave />
            </div>
        </>
    )
}