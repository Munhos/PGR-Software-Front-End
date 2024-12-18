import React from "react";
import TableComponent from "../common/Tables";

export default function ClientsComponent() {
    return (
        <div>
            <TableComponent
                dataTable={{
                    tHeadData: ["CNPJ", "Nome"],
                    tBodyData: [
                        ["00.000.000/0000-00", "Joaquim"]
                    ],
                }}
            />
        </div>
    );
}
