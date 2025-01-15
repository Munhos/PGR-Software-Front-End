import React from "react";
import NewVentilacao from "@/components/Cadastro/Ventilacao/newVentilacao";
import ModelPage from "@/components/common/ModelPage";

export default function newventilacao() {
    return (
        <div>
            <ModelPage
                nomePagina="Nova Ventilação"
                content={<NewVentilacao />}
            />
            
        </div>
    );
}