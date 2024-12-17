import React from "react";
import SideMenu from "@/components/SideMenu";
import styles from "./style.module.css";
import Link from "next/link";
import ButtonReturn from "../Buttons/ButtonReturn";

interface ModelPageProps {
    urlAnterior?: { url: string, name: string };
    content: any
}

export default function ModelPage({ urlAnterior, content }: ModelPageProps) {


    return (
        <main className={styles.main}>
            <SideMenu />

            <div className={styles.containerContent}>
                <div className={styles.containerButtonReturn}>
                {
                    urlAnterior ? (
                        <ButtonReturn
                            text={urlAnterior.name}
                            url={urlAnterior.url}
                        />
                    ) : null
                }
                </div>
                

                <div className={styles.content}>
                    {content}
                </div>
            </div>




        </main>
    );
}
