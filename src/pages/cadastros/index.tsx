import React from "react";
import ModelPage from "@/components/common/ModelPage";
import CadastroComponent from "@/components/Cadastro/GeneralCadastro";

export default function ventilacao() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Cadastros"
                content={<CadastroComponent />}
            />
        </div>
    );
}