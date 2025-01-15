import GerenciaComponent from "@/components/Cadastro/Gerencia/GeneralGerencia";
import ModelPage from "@/components/common/ModelPage";
import React from "react";


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