import React from "react";
import NewGerencia from "@/components/Cadastro/Gerencia/newGerencia";
import ModelPage from "@/components/common/ModelPage";

export default function newgerencia() {
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Nova Gerência", url: "/gerencia" }}
                content={<NewGerencia />}
            />
            
        </div>
    );
}