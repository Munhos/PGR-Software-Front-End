import React from "react";
import ModelPage from "@/components/common/ModelPage";
import EditEpi from "@/components/Cadastro/Epi/EditEpi";

export default function editepi() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Editar EPI"
                content={<EditEpi />}
            />
        </div>
    );
}