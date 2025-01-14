import React from "react";
import ModelPage from "@/components/common/ModelPage";
import AddAmbienteDeTrabalho from "@/components/AmbienteDeTrabalho/AddAmbienteDeTrabalho";

export default function ges() {
    
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Cadastro de Ambiente de Trabalho", url: "/cadastro" }}
                content={<AddAmbienteDeTrabalho />}
            />
        </div>
    );
}