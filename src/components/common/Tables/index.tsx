import React, { useState } from "react";
import { Popover, OverlayTrigger } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css"; // Certifique-se de importar os ícones do Bootstrap
import ConjunctButtonEditDelete from "../Buttons/ButtonsTable/ConjunctButtonEditDelete";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from'./style.module.css'; // Seu CSS deve vir depois


interface TableComponentProps {
    dataTable: {
        tHeadData: string[];
        tBodyData: string[][];
        idsData: string[];
    };
}

export default function TableComponent({ dataTable }: TableComponentProps) {
    const [openPopoverId, setOpenPopoverId] = useState<string | null>(null);

    const handleTogglePopover = (id: string) => {
        setOpenPopoverId(openPopoverId === id ? null : id);
    };

    const renderPopover = (id: string) => {
        console.log(id); // Logando o ID
        return (
            <Popover id={`popover-actions-${id}`} className="popover-actions">
                <Popover.Body>
                    <ul className="list-unstyled">
                        <ConjunctButtonEditDelete idData={id} />
                    </ul>
                </Popover.Body>
            </Popover>
        );
    };
    
    return (
        <div className="table-responsive">
            <table className={` ${styles.table} table`}>
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
                    {dataTable.tBodyData.map((row, rowIndex) => {
                        const rowId = dataTable.idsData[rowIndex];
                        return (
                            <tr key={rowId}>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex} className="text-start">
                                        {cell}
                                    </td>
                                ))}
                                <td className="text-end">
                                    <OverlayTrigger
                                        trigger="click"
                                        placement="top"
                                        overlay={renderPopover(rowId)}
                                        show={openPopoverId === rowId}
                                        onToggle={() => handleTogglePopover(rowId)}
                                    >
                                        <button className="btn btn-link">
                                            <i
                                                style={{ color: "var(--green02)" }}
                                                className="bi bi-three-dots"
                                            ></i>
                                        </button>
                                    </OverlayTrigger>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>+
        </div>
    );
}
