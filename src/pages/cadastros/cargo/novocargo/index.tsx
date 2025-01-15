import React from "react";
import NewCargo from "@/components/Cadastro/Cargo/newCargo";

import ModelPage from "@/components/common/ModelPage";

export default function newcargo() {
    return (
        <div>
            <ModelPage
                nomePagina="Novo Cargo"
                content={<NewCargo />}
            />
            
        </div>
    );
}