import React from "react";
import ModelPage from "@/components/common/ModelPage";
import CargoComponent from "@/components/Cadastro/Cargo/GeneralCargo";

export default function cargo() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Cargo"
                content={<CargoComponent />}
            />
        </div>
    );
}