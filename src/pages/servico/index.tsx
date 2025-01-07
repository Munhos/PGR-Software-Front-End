import React from "react";
import ModelPage from "@/components/common/ModelPage";
import InitialPageServicos from "@/components/Servicos/InitialPageServicos";

export default function servico() {
    return (
        <>
            <ModelPage
                urlAnterior={{ name: "Serviços", url: "/" }}
                content={<InitialPageServicos />}
            />
        </>
    );
}