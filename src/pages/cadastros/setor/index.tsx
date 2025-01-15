import React from "react";
import ModelPage from "@/components/common/ModelPage";
import SetorComponent from "@/components/Cadastro/Setor/GeneralSetor";

export default function setor() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Setor"
                content={<SetorComponent />}
            />
        </div>
    );
}