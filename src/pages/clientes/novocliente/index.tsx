import React from "react";
import NewClient from "@/components/ClientsComponent/NewClient";
import ModelPage from "@/components/common/ModelPage";

export default function NovoCliente() {
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Clientes", url: "/clientes" }}
                content={<NewClient />}
            />
            
        </div>
    );
}