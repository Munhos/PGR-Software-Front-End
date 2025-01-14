import React from "react";
import ModelPage from "@/components/common/ModelPage";
import AddAmbienteDeTrabalho from "@/components/AmbienteDeTrabalho/AddAmbienteDeTrabalho";
import Fluxograma from "@/components/Fluxograma";

export default function ges() {
    
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Cadastro de Fluxograma", url: "/ges/novoges" }}
                content={<Fluxograma />}
            />
        </div>
    );
}