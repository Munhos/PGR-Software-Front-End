import React from "react";
import ModelPage from "@/components/common/ModelPage";
import AddAmbienteDeTrabalho from "@/components/AmbienteDeTrabalho/AddAmbienteDeTrabalho";

export default function ges() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Cadastro de Ambiente de Trabalho"
                content={<AddAmbienteDeTrabalho />}
            />
        </div>
    );
}