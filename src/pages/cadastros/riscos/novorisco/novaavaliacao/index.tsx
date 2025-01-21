import React from "react";
import ModelPage from "@/components/common/ModelPage";
import CadastroComponent from "@/components/Cadastro/GeneralCadastro";
import AddRisco from "@/components/Cadastro/Riscos/AddRisco";
import AddAvaliação from "@/components/Avaliação/AddAvaliação";

export default function ventilacao() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Nova Avaliação"
                content={<AddAvaliação />}
            />
        </div>
    );
}