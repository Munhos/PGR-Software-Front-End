import React, { forwardRef } from "react";
import dynamic from "next/dynamic";
import styles from "./styles.module.css";

const Editor = dynamic(() => import("./WrappedEditor"), { ssr: false });

const EditorWithForwardedRef = forwardRef((props, ref) => (
  <Editor {...props} forwardedRef={ref} />
));

const myTheme = {
  "header.display": "none",
  // "common.bisize.width": "0",
  // "common.bisize.height": "0",
  // "downloadButton.display": "none",
  // "loadButton.display": "none",
};

const TuiImageEditor = (props:any) => {
  const { image, editorRef, onSave, isLoading, onCancel } = props;

  return (
    <div className={styles.editor}>
      <EditorWithForwardedRef
        {...props}
        includeUI={{
          loadImage: {
            path: image,
            name: "image",
          },
          theme: myTheme,
          menu: [
            "shape",
            "text",
            "mask",
            "icon",
            "draw",
            "crop",
            "flip",
            "rotate",
          ],
          initMenu: "icon",
          uiSize: {
            width: "1000px",
            height: "500px",
          },
          menuBarPosition: "bottom",
        }}
        cssMaxHeight={500}
        cssMaxWidth={700}
        selectionStyle={{
          cornerSize: 20,
          rotatingPointOffset: 70,
        }}
        usageStatistics={false}
        ref={editorRef}
      />
      
    </div>
  );
};

export default TuiImageEditor;