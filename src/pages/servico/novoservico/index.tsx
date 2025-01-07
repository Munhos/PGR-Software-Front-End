import React from "react";
import ModelPage from "@/components/common/ModelPage";
import NewPageServicos from "@/components/Servicos/NewPageServicos";

export default function novoServico() {
    return (
        <>
            <ModelPage
                urlAnterior={{ name: "Novo Serviço", url: "/servico" }}
                content={<NewPageServicos />}
            />
        </>
    );
}