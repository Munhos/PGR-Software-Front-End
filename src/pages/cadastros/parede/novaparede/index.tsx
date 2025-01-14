import React from "react";
import NewParede from "@/components/Cadastro/Parede/newParede";
import ModelPage from "@/components/common/ModelPage";

export default function newparede() {
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Nova Parede", url: "/cadastro/parede" }}
                content={<NewParede />}
            />
            
        </div>
    );
}