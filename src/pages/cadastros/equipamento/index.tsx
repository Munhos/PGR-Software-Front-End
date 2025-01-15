import React from "react";
import ModelPage from "@/components/common/ModelPage";
import EquipamentoComponent from "@/components/Cadastro/Equipamento/GeneralEquipamento";

export default function equipamento() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Equipamento"
                content={<EquipamentoComponent />}
            />
        </div>
    );
}