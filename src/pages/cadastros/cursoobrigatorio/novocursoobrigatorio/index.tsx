import React from "react";
import NewCursoObrigatorio from "@/components/Cadastro/CursoObrigatorio/EditCursoObrigatorio";
import ModelPage from "@/components/common/ModelPage";

export default function newcursoobrigatorio() {
    return (
        <div>
            <ModelPage
                nomePagina="Novo Curso Obrigatório"
                content={<NewCursoObrigatorio />}
            />
            
        </div>
    );
}