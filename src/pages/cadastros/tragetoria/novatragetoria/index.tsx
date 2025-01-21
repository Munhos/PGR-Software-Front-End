import React from "react";
import NewTragetoria from "@/components/Cadastro/Tragetoria/EditTragetoria";
import ModelPage from "@/components/common/ModelPage";

export default function newtragetoria() {
    return (
        <div>
            <ModelPage
                nomePagina="Nova Tragetoria"
                content={<NewTragetoria />}
            />
            
        </div>
    );
}