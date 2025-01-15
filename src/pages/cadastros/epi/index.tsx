import React from "react";
import ModelPage from "@/components/common/ModelPage";
import EpiComponent from "@/components/Cadastro/Epi/GeneralEpi";

export default function epi() {
    
    return (
        <div>
            <ModelPage
                nomePagina="EPI's"
                content={<EpiComponent />}
            />
        </div>
    );
}