import React from "react";
import ModelPage from "@/components/common/ModelPage";
import CargoComponent from "@/components/Cadastro/Cargo/GeneralCargo";

export default function cargo() {
    
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Cargo", url: "/cargo" }}
                content={<CargoComponent />}
            />
        </div>
    );
}