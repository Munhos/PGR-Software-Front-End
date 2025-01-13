import React from "react";
import NewPiso from "@/components/Cadastro/Piso/newPiso";
import ModelPage from "@/components/common/ModelPage";

export default function newgpiso() {
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Novo Piso", url: "/cadastro/piso" }}
                content={<NewPiso />}
            />
            
        </div>
    );
}