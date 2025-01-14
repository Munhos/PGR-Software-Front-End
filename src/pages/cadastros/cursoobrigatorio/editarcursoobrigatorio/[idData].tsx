import React from "react";
import ModelPage from "@/components/common/ModelPage";
import EditCursoObrigatorio from "@/components/Cadastro/CursoObrigatorio/EditCursoObrigatorio";

export default function editcursoobrigatorio() {
    
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Editar Curso Obrigatório", url: "/cadastro/cursoobrigatorio" }}
                content={<EditCursoObrigatorio />}
            />
        </div>
    );
}