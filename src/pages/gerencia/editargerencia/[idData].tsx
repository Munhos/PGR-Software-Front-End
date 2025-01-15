import EditGerencia from "@/components/Cadastro/Gerencia/EditGerencia";
import ModelPage from "@/components/common/ModelPage";
import React from "react";


export default function gerencia() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Editar Gerência"
                content={<EditGerencia />}
            />
        </div>
    );
}