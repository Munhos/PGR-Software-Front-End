import React from "react";
import ModelPage from "@/components/common/ModelPage";
import ParedeComponent from "@/components/Cadastro/Parede/GeneralParede";

export default function parede() {
    
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Gerência", url: "/" }}
                content={<ParedeComponent />}
            />
        </div>
    );
}