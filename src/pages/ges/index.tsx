import React from "react";
import ModelPage from "@/components/common/ModelPage";
import GerenciaComponent from "@/components/Cadastro/Gerencia/GenerealGerencia";
import InitialPageGes from "@/components/Ges/InitialPage";

export default function ges() {
    
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "GES", url: "/" }}
                content={<InitialPageGes />}
            />
        </div>
    );
}