import React from "react";
import ModelPage from "@/components/common/ModelPage";
import CursosObrigatorioComponent from "@/components/Cadastro/CursoObrigatorio/GeneralCursoObrigatorio";

export default function cursoobrigatorio() {
    
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Curso Obrigatório", url: "/" }}
                content={<CursosObrigatorioComponent />}
            />
        </div>
    );
}