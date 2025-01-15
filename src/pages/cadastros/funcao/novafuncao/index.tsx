import React from "react";
import NewFunction from "@/components/Cadastro/Funcao/newFunction";
import ModelPage from "@/components/common/ModelPage";

export default function newfuncao() {
    return (
        <div>
            <ModelPage
                nomePagina="Nova Função"
                content={<NewFunction />}
            />
            
        </div>
    );
}