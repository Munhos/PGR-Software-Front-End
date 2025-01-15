import React from "react";
import NewMobiliario from "@/components/Cadastro/Mobiliario/newMobiliario";
import ModelPage from "@/components/common/ModelPage";

export default function newmobiliario() {
    return (
        <div>
            <ModelPage
                nomePagina="Novo Mobiliário"
                content={<NewMobiliario />}
            />
            
        </div>
    );
}