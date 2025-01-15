import React from "react";
import ModelPage from "@/components/common/ModelPage";
import EditCursoObrigatorio from "@/components/Cadastro/CursoObrigatorio/EditCursoObrigatorio";

export default function editcursoobrigatorio() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Editar Curso Obrigatório"
                content={<EditCursoObrigatorio />}
            />
        </div>
    );
}