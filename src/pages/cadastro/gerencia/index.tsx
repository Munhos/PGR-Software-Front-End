import React from "react";
import ModelPage from "@/components/common/ModelPage";
import GerenciaComponent from "@/components/Cadastro/Gerencia/GeneralGerencia";

export default function gerencia() {
    
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Gerência", url: "/" }}
                content={<GerenciaComponent />}
            />
        </div>
    );
}