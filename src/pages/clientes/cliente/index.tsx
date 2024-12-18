import React from "react";
import ModelPage from "@/components/common/ModelPage";
import EspecificClient from "@/components/ClientsComponent/EspecificClient";

export default function Cliente() {
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Clientes", url: "/clientes" }}
                content={<EspecificClient />}
            />

        </div>
    );
}