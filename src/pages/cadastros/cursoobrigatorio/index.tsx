import React from "react";
import ModelPage from "@/components/common/ModelPage";
import CursosObrigatorioComponent from "@/components/Cadastro/CursoObrigatorio/GeneralCursoObrigatorio";

export default function cursoobrigatorio() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Cursos Obrigatórios"
                content={<CursosObrigatorioComponent />}
            />
        </div>
    );
}