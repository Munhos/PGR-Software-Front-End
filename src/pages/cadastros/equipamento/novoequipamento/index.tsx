import React from "react";
import NewEquipamento from "@/components/Cadastro/Equipamento/newEquipamentos";
import ModelPage from "@/components/common/ModelPage";

export default function newequipamento() {
    return (
        <div>
            <ModelPage
                nomePagina="Novo Equipamento"
                content={<NewEquipamento />}
            />
            
        </div>
    );
}