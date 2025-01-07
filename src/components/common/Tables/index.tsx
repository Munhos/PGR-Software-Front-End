import React, { useState, useEffect } from "react";
import { Popover, OverlayTrigger } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css"; // Importando ícones do Bootstrap
import ConjunctButtonEditDelete from "../Buttons/ButtonsTable/ConjunctButtonEditDelete";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './style.module.css'; // Seu CSS deve vir depois

interface TableComponentProps {
    dataTable: {
        tHeadData: string[];
        tBodyData: string[][];
    };
}

const TableComponent: React.FC<TableComponentProps> = ({ dataTable }) => {
    const [openPopoverId, setOpenPopoverId] = useState<string | null>(null);
    const [formatedData, setFormatedData] = useState<any[]>([]);
    const [atualPage, setAtualPage] = useState(1);
    const [numberPages, setNumberPages] = useState(0);

    const handleTogglePopover = (id: string) => {
        setOpenPopoverId((prevId) => (prevId === id ? null : id));
    };


    const renderPopover = (id: string) => {
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

    const formatData = () => {
        const tempData: any[] = [];
        let listTemp: any[] = [];

        dataTable.tBodyData.forEach((row, index) => {
            listTemp.push(row);
            if (listTemp.length === 10 || index === dataTable.tBodyData.length - 1) {
                tempData.push(listTemp);
                listTemp = [];
            }
        });

        setFormatedData(tempData);
        setNumberPages(Math.ceil(dataTable.tBodyData.length / 10));
    };

    useEffect(() => {
        formatData();
    }, [dataTable]);

    useEffect(() => {
        const storedPage = sessionStorage.getItem("atualPageTable");
        if (storedPage) {
            setAtualPage(Number(storedPage));
        }
    }, []);

    useEffect(() => {
        sessionStorage.setItem("atualPageTable", atualPage.toString());
    }, [atualPage]);

    const handlePreviousPage = () => {
        setAtualPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNextPage = () => {
        setAtualPage((prev) => Math.min(prev + 1, numberPages));
    };

    const renderPageNumbers = () => {
        const pagesToShow = [];

        if (atualPage > 1) {
            pagesToShow.push(atualPage - 1);
        }

        pagesToShow.push(atualPage);

        if (atualPage < numberPages) {
            pagesToShow.push(atualPage + 1);
        }

        return pagesToShow.map((page) => (
            <li
                key={page}
                className={`page-item ${atualPage === page ? "active" : ""}`}
            >
                <a
                    className="page-link"
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        setAtualPage(page);
                    }}
                    style={{
                        backgroundColor: "var(--green02)",
                        color: "var(--white)",
                    }}
                >
                    {page}
                </a>
            </li>
        ));
    };

    console.log(formatedData)

    return (
        <div className={`table-responsive ${styles.tableContainer}`}>
            <table className={` ${styles.table} table`}>
                <thead>
                    <tr>
                        {dataTable.tHeadData.map((item, index) => (
                            <th
                                key={index}
                                className="text-start"
                                style={{
                                    width: `calc(100% / ${dataTable.tHeadData.length})`,
                                }}
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
                    {formatedData.length > 0 &&
                        formatedData[atualPage - 1]?.map((row: any, pageIndex: any) => (
                            <tr key={pageIndex}>
                                {
                                    row.slice(1).map((item: any, index: any) => (
                                        <td
                                            key={index}
                                            className="text-start"
                                            style={{
                                                width: `calc(100% / ${row.length - 1})`,  
                                            }}
                                        >
                                            {item}
                                        </td>
                                    ))
                                }
                                <td className="text-end">
                                    <OverlayTrigger
                                        trigger="click"
                                        placement="top"
                                        overlay={renderPopover(row[0])} 
                                        show={openPopoverId === row[0]} 
                                        onToggle={() => handleTogglePopover(row[0])} 
                                    >
                                        <button className="btn btn-link">
                                            <i style={{ color: "var(--green02)" }} className="bi bi-three-dots"></i>
                                        </button>
                                    </OverlayTrigger>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>

            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className={`page-item ${atualPage === 1 ? "disabled" : ""}`}>
                        <a
                            className="page-link"
                            href="#"
                            aria-label="Previous"
                            onClick={(e) => {
                                e.preventDefault();
                                handlePreviousPage();
                            }}
                            style={{ color: "var(--green02)", backgroundColor: "var(--white)" }}

                        >
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>

                    {renderPageNumbers()}

                    <li
                        className={`page-item ${atualPage === numberPages ? "disabled" : ""}`}
                    >
                        <a
                            className="page-link"
                            href="#"
                            aria-label="Next"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNextPage();
                            }}
                            style={{ color: "var(--green02)", backgroundColor: "var(--white)" }}
                        >
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default TableComponent;
