import React from "react";
import ModelPage from "@/components/common/ModelPage";
import GerenciaComponent from "@/components/Cadastro/Gerencia/GenerealGerencia";
import EditGerencia from "@/components/Cadastro/Gerencia/EditGerencia";

export default function gerencia() {
    
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Editar Gerência", url: "/gerencia" }}
                content={<EditGerencia />}
            />
        </div>
    );
}