import React from "react";
import ModelPage from "@/components/common/ModelPage";
import MobiliarioComponent from "@/components/Cadastro/Mobiliario/GeneralMobiliario";

export default function mobiliario() {
    
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Mobiliário", url: "/" }}
                content={<MobiliarioComponent />}
            />
        </div>
    );
}