import React from "react";
import ButtonSearch from "../common/Buttons/ButtonSearch";
import ButtonAdd from "../common/Buttons/ButtonAdd";
import ButtonSearchInitialPage from "../common/ButtonSearchInitialPage";

export default function InicialMenuComponent() {
    return (
        <div>
            <ButtonSearch 
                type="button"
            />
            <ButtonAdd 
                type="button"
            />
            <ButtonSearchInitialPage 
                url="/servicos"
                icon="bi bi-person "
                text="Serviços "
            />
            
        </div>
    );
}