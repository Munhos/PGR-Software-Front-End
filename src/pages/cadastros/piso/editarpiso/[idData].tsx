import React from "react";
import ModelPage from "@/components/common/ModelPage";
import EditPiso from "@/components/Cadastro/Piso/EditPiso";

export default function editpiso() {
    
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Editar Piso", url: "/cadastro/piso" }}
                content={<EditPiso />}
            />
        </div>
    );
}