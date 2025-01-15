import React from "react";
import ModelPage from "@/components/common/ModelPage";
import AddAmbienteDeTrabalho from "@/components/AmbienteDeTrabalho/AddAmbienteDeTrabalho";
import Fluxograma from "@/components/Fluxograma";

export default function ges() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Cadastro de Fluxograma"
                content={<Fluxograma />}
            />
        </div>
    );
}