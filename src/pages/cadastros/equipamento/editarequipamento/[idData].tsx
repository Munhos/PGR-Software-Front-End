import React from "react";
import ModelPage from "@/components/common/ModelPage";
import EditEquipamento from "@/components/Cadastro/Equipamento/EditEquipamento";

export default function editequipamento() {
    
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Editar Equipamento", url: "/cadastro/equipamento" }}
                content={<EditEquipamento />}
            />
        </div>
    );
}