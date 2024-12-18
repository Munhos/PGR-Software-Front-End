import React from "react";
import ModelPage from "@/components/common/ModelPage";
import ClientsComponent from "@/components/ClientsComponent";

export default function Clientes() {
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Clientes", url: "/clientes" }}
                content={<ClientsComponent />}
            />
        </div>
    );
}