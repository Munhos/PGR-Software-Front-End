import React from "react";
import ModelPage from "@/components/common/ModelPage";
import EditFuncao from "@/components/Cadastro/Funcao/EditFuncao";

export default function editfuncao() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Editar Função"
                content={<EditFuncao />}
            />
        </div>
    );
}