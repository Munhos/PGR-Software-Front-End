import GerenciaComponent from "@/components/Cadastro/Gerencia/GeneralGerencia";
import ModelPage from "@/components/common/ModelPage";
import React from "react";


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