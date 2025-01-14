import React from "react";
import ModelPage from "@/components/common/ModelPage";
import EditFuncao from "@/components/Cadastro/Funcao/EditFuncao";

export default function editfuncao() {
    
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Editar Função", url: "/cadastro/funcao" }}
                content={<EditFuncao />}
            />
        </div>
    );
}