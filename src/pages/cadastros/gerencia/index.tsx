import React from "react";
import ModelPage from "@/components/common/ModelPage";
import GerenciaComponent from "@/components/Cadastro/Gerencia/GeneralGerencia";

export default function gerencia() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Gerência"
                content={<GerenciaComponent />}
            />
        </div>
    );
}