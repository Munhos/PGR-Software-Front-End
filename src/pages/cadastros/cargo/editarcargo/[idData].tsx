import React from "react";
import ModelPage from "@/components/common/ModelPage";
import EditCargo from "@/components/Cadastro/Cargo/EditCargo";

export default function editcargo() {
    
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Editar Cargo", url: "/cadastro/cargo" }}
                content={<EditCargo />}
            />
        </div>
    );
}