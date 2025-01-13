import ButtonAddImageGeneral from "@/components/common/Buttons/ButtonAddImage";
import React, { useEffect, useState } from "react";
import TuiImageEditor from "..";

export default function ImageAddAndEditComponent() {
    const [imageOpens, setImageOpens] = useState(false);
    const [file, setFile] = useState<string>(""); // Estado do arquivo atual
    const [listImages, setListImages] = useState<string[]>([]); // Lista de imagens
    const [imgSelecionada, setImgSelecionada] = useState<string>(""); // Imagem selecionada

    useEffect(() => {
        if (file) {
            setListImages([...listImages, file]); // Adiciona o arquivo à lista de imagens
        }

        setImgSelecionada("")
    }, [file]);

    const handleSave = (editedImage: string) => {
        console.log("Imagem salva:", editedImage);
        // Processar ou armazenar a imagem editada
    };

    return (
        <main>
            <div
                onClick={() => setImageOpens(!imageOpens)}
                style={{ display: "flex", cursor: "pointer" }}
            >
                <h6 style={{ userSelect: "none" }}>Fotos</h6>
                <i
                    className={`bi ${imageOpens ? "bi-arrow-up-short" : "bi-arrow-down-short"
                        }`}
                ></i>
            </div>
            {imageOpens && (
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                    {listImages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Imagem ${index}`}
                            // title={`Imagem ${image}`}
                            style={{
                                width: "100px",
                                height: "100px",
                                objectFit: "cover",
                                cursor: "pointer",
                            }}
                            onClick={() => setImgSelecionada(image)} // Atualiza a imagem selecionada
                        />
                    ))}
                    <ButtonAddImageGeneral
                        width="100px"
                        height="100px"
                        onFileChange={(fileUrl: any) => setFile(fileUrl)} // Callback para atualizar o estado `file`
                    />
                    {imgSelecionada && (
                        <div>
                            <TuiImageEditor image={imgSelecionada} onSave={handleSave} />
                        </div>
                    )}
                </div>

            )}

        </main>
    );
}
