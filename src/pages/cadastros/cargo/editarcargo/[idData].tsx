import React from "react";
import ModelPage from "@/components/common/ModelPage";
import EditCargo from "@/components/Cadastro/Cargo/EditCargo";

export default function editcargo() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Editar Cargo"
                content={<EditCargo />}
            />
        </div>
    );
}