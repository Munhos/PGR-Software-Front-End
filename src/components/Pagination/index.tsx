import React, { useState, useEffect } from "react";

export default function Pagination({ dataTable }: any) {
    const [numberElements, setNumberElements] = useState(0);
    const [numberPages, setNumberPages] = useState(0);
    const [atualPage, setAtualPage] = useState(1);

    // Atualiza o número de elementos e páginas
    useEffect(() => {
        setNumberElements(dataTable.tBodyData.length);
        setNumberPages(Math.ceil(dataTable.tBodyData.length / 10));
    }, [dataTable.tBodyData]);

    // Atualiza o atualPage a partir do sessionStorage ao carregar o componente
    useEffect(() => {
        const storedPage = sessionStorage.getItem("atualPageTable");
        if (storedPage) {
            setAtualPage(Number(storedPage));
        }
    }, []);

    // Salva o valor de atualPage no sessionStorage
    useEffect(() => {
        sessionStorage.setItem("atualPageTable", atualPage.toString());
    }, [atualPage]);

    const handlePreviousPage = () => {
        setAtualPage((prev) => Math.max(prev - 1, 1)); // Evita página negativa
    };

    const handleNextPage = () => {
        setAtualPage((prev) => Math.min(prev + 1, numberPages)); // Evita ultrapassar o número de páginas
    };

    const renderPageNumbers = () => {
        const pagesToShow = [];

        // Página anterior
        if (atualPage > 1) {
            pagesToShow.push(atualPage - 1);
        }

        // Página atual
        pagesToShow.push(atualPage);

        // Página seguinte
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
                >
                    {page}
                </a>
            </li>
        ));
    };

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {/* Botão "Previous" */}
                <li className={`page-item ${atualPage === 1 ? "disabled" : ""}`}>
                    <a
                        className="page-link"
                        href="#"
                        aria-label="Previous"
                        onClick={(e) => {
                            e.preventDefault();
                            handlePreviousPage();
                        }}
                    >
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>

                {/* Números das páginas */}
                {renderPageNumbers()}

                {/* Botão "Next" */}
                <li
                    className={`page-item ${
                        atualPage === numberPages ? "disabled" : ""
                    }`}
                >
                    <a
                        className="page-link"
                        href="#"
                        aria-label="Next"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNextPage();
                        }}
                    >
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}
