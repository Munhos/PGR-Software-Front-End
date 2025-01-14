import React from "react";
import NewEquipamento from "@/components/Cadastro/Equipamento/newEquipamentos";
import ModelPage from "@/components/common/ModelPage";

export default function newequipamento() {
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Novo Equipamento", url: "/cadastro/equipamento" }}
                content={<NewEquipamento />}
            />
            
        </div>
    );
}