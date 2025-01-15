import React from "react";
import ModelPage from "@/components/common/ModelPage";
import FuncaoComponent from "@/components/Cadastro/Funcao/GeneralFunction";

export default function funcao() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Função"
                content={<FuncaoComponent />}
            />
        </div>
    );
}