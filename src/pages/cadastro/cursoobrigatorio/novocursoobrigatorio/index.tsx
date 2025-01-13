import React from "react";
import NewCursoObrigatorio from "@/components/Cadastro/CursoObrigatorio/EditCursoObrigatorio";
import ModelPage from "@/components/common/ModelPage";

export default function newcursoobrigatorio() {
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Novo Curso Obrigatório", url: "/cadastro/cursoobrigatorio" }}
                content={<NewCursoObrigatorio />}
            />
            
        </div>
    );
}