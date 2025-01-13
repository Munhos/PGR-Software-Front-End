import React from "react";
import ModelPage from "@/components/common/ModelPage";
import EpiComponent from "@/components/Cadastro/Epi/GeneralEpi";

export default function epi() {
    
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "EPI's", url: "/" }}
                content={<EpiComponent />}
            />
        </div>
    );
}