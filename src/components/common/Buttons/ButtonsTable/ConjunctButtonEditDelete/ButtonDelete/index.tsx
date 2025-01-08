import React from "react";

interface ButtonEditTableProps {
    idData: {
        id: string;
        route: string;
    };
}

export default function ButtonDeleteTable({ idData }: ButtonEditTableProps) {
    return (
        <div>
            <button className="btn btn-danger " style={{ color: "white" }}><i className="bi bi-trash3-fill"></i></button>
        </div>
    );
}