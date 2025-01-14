import React from "react";
import NewCargo from "@/components/Cadastro/Cargo/newCargo";

import ModelPage from "@/components/common/ModelPage";

export default function newcargo() {
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Novo Cargo", url: "/cadastro/cargo" }}
                content={<NewCargo />}
            />
            
        </div>
    );
}