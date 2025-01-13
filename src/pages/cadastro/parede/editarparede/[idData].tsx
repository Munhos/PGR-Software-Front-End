import React from "react";
import ModelPage from "@/components/common/ModelPage";
import EditParede from "@/components/Cadastro/Parede/EditParede";

export default function editparede() {
    
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Editar Parede", url: "/cadastro/parede" }}
                content={<EditParede />}
            />
        </div>
    );
}