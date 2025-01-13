import React from "react";
import NewMobiliario from "@/components/Cadastro/Mobiliario/newMobiliario";
import ModelPage from "@/components/common/ModelPage";

export default function newmobiliario() {
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Novo Mobiliário", url: "/cadastro/mobiliario" }}
                content={<NewMobiliario />}
            />
            
        </div>
    );
}