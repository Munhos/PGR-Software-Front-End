import React from "react";
import ModelPage from "@/components/common/ModelPage";
import InitialPageLaudos from "@/components/Laudos/InitialPageLaudos/InitialPageLaudos";

export default function servico() {
    return (
        <>
            <ModelPage
                urlAnterior={{ name: "Laudos Gerados", url: "/" }}
                content={<InitialPageLaudos />}
            />
        </>
    );
}