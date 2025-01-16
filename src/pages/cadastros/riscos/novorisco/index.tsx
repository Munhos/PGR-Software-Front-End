import React from "react";
import ModelPage from "@/components/common/ModelPage";
import CadastroComponent from "@/components/Cadastro/GeneralCadastro";
import AddRisco from "@/components/Cadastro/Riscos/AddRisco";

export default function ventilacao() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Cadastro de Risco"
                content={<AddRisco />}
            />
        </div>
    );
}