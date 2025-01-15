import React from "react";
import ModelPage from "@/components/common/ModelPage";
import GerenciaComponent from "@/components/Cadastro/Gerencia/GeneralGerencia";
import InitialPageGes from "@/components/Ges/InitialPage";
import NewPageGes from "@/components/Ges/NewPageGes";

export default function ges() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Novo GES"
                content={<NewPageGes />}
            />
        </div>
    );
}