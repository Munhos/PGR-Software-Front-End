import React from "react";
import NewVentilacao from "@/components/Cadastro/Ventilacao/newVentilacao";
import ModelPage from "@/components/common/ModelPage";

export default function newventilacao() {
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Nova Ventilação", url: "/cadastro/ventilacao" }}
                content={<NewVentilacao />}
            />
            
        </div>
    );
}