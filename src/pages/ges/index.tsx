import React from "react";
import ModelPage from "@/components/common/ModelPage";
import GerenciaComponent from "@/components/Cadastro/Gerencia/GeneralGerencia";
import InitialPageGes from "@/components/Ges/InitialPage";

export default function ges() {
    
    return (
        <div>
            <ModelPage
                nomePagina="GES"
                content={<InitialPageGes />}
            />
        </div>
    );
}