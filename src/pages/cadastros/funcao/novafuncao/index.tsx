import React from "react";
import NewFunction from "@/components/Cadastro/Funcao/newFunction";
import ModelPage from "@/components/common/ModelPage";

export default function newfuncao() {
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Nova Função", url: "/cadastro/funcao" }}
                content={<NewFunction />}
            />
            
        </div>
    );
}