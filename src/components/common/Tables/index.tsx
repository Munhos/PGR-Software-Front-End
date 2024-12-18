import React, { useState } from "react";
import { Popover, OverlayTrigger } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css"; // Certifique-se de importar os ícones do Bootstrap
import ConjunctButtonEditDelete from "../Buttons/ButtonsTable/ConjunctButtonEditDelete";

interface TableComponentProps {
    dataTable: {
        tHeadData: string[];
        tBodyData: string[][];
    };
}

export default function TableComponent({ dataTable }: TableComponentProps) {
    const [showPopover, setShowPopover] = useState(false);

    const handleTogglePopover = () => setShowPopover(!showPopover);

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
                    <tr style={{width:"100%"}}>
                        {dataTable.tHeadData.map((item, index) => (
                            <th style={{ width: `calc(100% / ${dataTable.tHeadData.length})` }} key={index} className="text-start">{item}</th>
                        ))}
                        <th style={{ width: "30px" }} className="text-end">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {dataTable.tBodyData.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className="text-start">{cell}</td>
                            ))}
                            <td className="text-end">
                                <OverlayTrigger
                                    trigger="click"
                                    placement="top"
                                    overlay={popover}
                                    show={showPopover}
                                    onToggle={handleTogglePopover}
                                >
                                    <button className="btn btn-link">
                                        <i className="bi bi-three-dots"></i>
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
