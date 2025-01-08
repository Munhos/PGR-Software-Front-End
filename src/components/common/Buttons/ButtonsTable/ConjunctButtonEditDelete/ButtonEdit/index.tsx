import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from "next/link";

interface ButtonEditTableProps {
    idData: {
        id: string;
        route: string;
    };
}

export default function ButtonEditTable({ idData }: ButtonEditTableProps) {
    return (
        <Link href={`/${idData.route}/${idData.id}`}>
            <button className="btn btn-primary " style={{ color: "white" }}><i className="bi bi-pencil-fill"></i></button>
        </Link>
    );
}