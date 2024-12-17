import React from "react";
import SideMenu from "@/components/SideMenu";
import styles from "./style.module.css";
import Link from "next/link";
import ButtonReturn from "../Buttons/ButtonReturn";

interface ModelPageProps {
    urlAnterior?: { url: string, name: string };
}

export default function ModelPage({ urlAnterior }: ModelPageProps) {


    return (
        <main className={styles.main}>
            <SideMenu />

            {
                urlAnterior ? (
                    <ButtonReturn
                        text={urlAnterior.name}
                        url={urlAnterior.url}
                    />
                ) : null
            }




        </main>
    );
}
