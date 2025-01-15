import React from "react";
import NewSetor from "@/components/Cadastro/Setor/newSetor";
import ModelPage from "@/components/common/ModelPage";

export default function newsetor() {
    return (
        <div>
            <ModelPage
                nomePagina="Novo Setor"
                content={<NewSetor />}
            />
            
        </div>
    );
}