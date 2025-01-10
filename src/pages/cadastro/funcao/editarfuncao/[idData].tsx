import React from "react";
import ModelPage from "@/components/common/ModelPage";
import EditFuncao from "@/components/Cadastro/Funcao/EditFuncao";

export default function funcao() {
    
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Editar Função", url: "/cadastro/funcao" }}
                content={<EditFuncao />}
            />
        </div>
    );
}