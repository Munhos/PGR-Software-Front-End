import React from "react";
import ModelPage from "@/components/common/ModelPage";
import EditPiso from "@/components/Cadastro/Piso/EditPiso";

export default function editpiso() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Editar Piso"
                content={<EditPiso />}
            />
        </div>
    );
}