import React from "react";
import ModelPage from "@/components/common/ModelPage";
import EditEpi from "@/components/Cadastro/Epi/EditEpi";

export default function editepi() {
    
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Editar Epi", url: "/cadastro/epi" }}
                content={<EditEpi />}
            />
        </div>
    );
}