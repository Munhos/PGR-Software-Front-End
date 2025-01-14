import React from "react";
import ModelPage from "@/components/common/ModelPage";
import PisoComponent from "@/components/Cadastro/Piso/GeneralPiso";

export default function piso() {
    
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Piso", url: "/" }}
                content={<PisoComponent />}
            />
        </div>
    );
}