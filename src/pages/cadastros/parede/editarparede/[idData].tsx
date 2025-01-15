import React from "react";
import ModelPage from "@/components/common/ModelPage";
import EditParede from "@/components/Cadastro/Parede/EditParede";

export default function editparede() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Editar Parede"
                content={<EditParede />}
            />
        </div>
    );
}