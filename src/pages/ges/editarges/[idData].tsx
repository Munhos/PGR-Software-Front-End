import React from "react";
import ModelPage from "@/components/common/ModelPage";
import AddAmbienteDeTrabalho from "@/components/AmbienteDeTrabalho/AddAmbienteDeTrabalho";
import EditGes from "@/components/Ges/EditGes";

export default function ges() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Edição de GES"
                content={<EditGes />}
            />
        </div>
    );
}