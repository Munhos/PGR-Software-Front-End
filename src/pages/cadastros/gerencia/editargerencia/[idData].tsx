import React from "react";
import ModelPage from "@/components/common/ModelPage";
import EditGerencia from "@/components/Cadastro/Gerencia/EditGerencia";

export default function editgerencia() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Editar Gerência"
                content={<EditGerencia />}
            />
        </div>
    );
}