import React from "react";
import ModelPage from "@/components/common/ModelPage";
import EditMobiliario from "@/components/Cadastro/Mobiliario/EditMobiliario";

export default function editmobiliario() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Editar Mobiliário"
                content={<EditMobiliario />}
            />
        </div>
    );
}