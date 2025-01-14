import React from "react";
import ModelPage from "@/components/common/ModelPage";
import EditRac from "@/components/Cadastro/Rac/EditRac";

export default function editrac() {
    
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Editar RAC", url: "/cadastro/rac" }}
                content={<EditRac />}
            />
        </div>
    );
}