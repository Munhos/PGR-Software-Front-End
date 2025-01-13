import React from "react";
import ModelPage from "@/components/common/ModelPage";
import EditMobiliario from "@/components/Cadastro/Mobiliario/EditMobiliario";

export default function editmobiliario() {
    
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Editar Mobiliário", url: "/cadastro/mobiliario" }}
                content={<EditMobiliario />}
            />
        </div>
    );
}