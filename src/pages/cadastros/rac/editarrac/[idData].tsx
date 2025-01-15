import React from "react";
import ModelPage from "@/components/common/ModelPage";
import EditRac from "@/components/Cadastro/Rac/EditRac";

export default function editrac() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Editar RAC"
                content={<EditRac />}
            />
        </div>
    );
}