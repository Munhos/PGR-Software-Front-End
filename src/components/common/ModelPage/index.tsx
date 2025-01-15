import React from "react";
import SideMenu from "@/components/SideMenu";
import styles from "./style.module.css";
import Link from "next/link";
import ButtonReturn from "../Buttons/ButtonReturn";

interface ModelPageProps {
    nomePagina: string
    content: any
}

export default function ModelPage({ nomePagina, content }: ModelPageProps) {


    return (
        <main className={styles.main}>
            <SideMenu />

            <div className={styles.containerContent}>
                <div className={styles.containerButtonReturn}>
                    <ButtonReturn
                        text={nomePagina}

                    />
                </div>


                <div className={styles.content}>
                    {content}
                </div>
            </div>




        </main>
    );
}
