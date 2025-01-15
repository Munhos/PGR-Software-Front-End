import React from "react";
import ModelPage from "@/components/common/ModelPage";
import EditEquipamento from "@/components/Cadastro/Equipamento/EditEquipamento";

export default function editequipamento() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Editar Equipamento"
                content={<EditEquipamento />}
            />
        </div>
    );
}