import React from "react";
import ModelPage from "@/components/common/ModelPage";
import EditTragetoria from "@/components/Cadastro/Tragetoria/EditTragetoria";

export default function edittragetoria() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Editar Tragetória"
                content={<EditTragetoria />}
            />
        </div>
    );
}