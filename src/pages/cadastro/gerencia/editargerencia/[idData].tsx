import React from "react";
import ModelPage from "@/components/common/ModelPage";
import EditGerencia from "@/components/Cadastro/Gerencia/EditGerencia";

export default function editgerencia() {
    
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Editar Gerência", url: "/cadastro/gerencia" }}
                content={<EditGerencia />}
            />
        </div>
    );
}