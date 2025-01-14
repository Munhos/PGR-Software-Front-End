import React from "react";
import ModelPage from "@/components/common/ModelPage";
import RacComponent from "@/components/Cadastro/Rac/GeneralRac";

export default function novorac() {
    
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "RAC", url: "/" }}
                content={<RacComponent />}
            />
        </div>
    );
}