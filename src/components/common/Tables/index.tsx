import React, { useState } from "react";
import { Popover, OverlayTrigger } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css"; // Certifique-se de importar os ícones do Bootstrap
import ConjunctButtonEditDelete from "../Buttons/ButtonsTable/ConjunctButtonEditDelete";
import NormalSearchInput from "../Inputs/NormalSearchInput";

interface TableComponentProps {
    dataTable: {
        tHeadData: string[];
        tBodyData: string[][];
    };
}

export default function TableComponent({ dataTable }: TableComponentProps) {
    const [openPopoverId, setOpenPopoverId] = useState<number | null>(null);

    const handleTogglePopover = (id: number) => {
        setOpenPopoverId(openPopoverId === id ? null : id);
    };

    const popover = (
        <Popover id="popover-actions" className="popover-actions">
            <Popover.Body>
                <ul className="list-unstyled">
                    <ConjunctButtonEditDelete />
                </ul>
            </Popover.Body>
        </Popover>
    );

    return (
        <div className="table-responsive">
            <table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        {dataTable.tHeadData.map((item, index) => (
                            <th
                                style={{
                                    width: `calc(100% / ${dataTable.tHeadData.length})`,
                                }}
                                key={index}
                                className="text-start"
                            >
                                {item}
                            </th>
                        ))}
                        <th style={{ width: "30px" }} className="text-end">
                            Ações
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {dataTable.tBodyData.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className="text-start">
                                    {cell}
                                </td>
                            ))}
                            <td className="text-end">
                                <OverlayTrigger
                                    trigger="click"
                                    placement="top"
                                    overlay={popover}
                                    show={openPopoverId === rowIndex}
                                    onToggle={() => handleTogglePopover(rowIndex)}
                                >
                                    <button className="btn btn-link">
                                        <i style={{color: "var(--green02"}} className="bi bi-three-dots"></i>
                                    </button>
                                </OverlayTrigger>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
