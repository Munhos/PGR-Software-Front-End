import React from "react";
import NewGerencia from "@/components/Cadastro/Gerencia/newGerencia";
import ModelPage from "@/components/common/ModelPage";

export default function newgerencia() {
    return (
        <div>
            <ModelPage
                nomePagina="Nova Gerência"
                content={<NewGerencia />}
            />
            
        </div>
    );
}