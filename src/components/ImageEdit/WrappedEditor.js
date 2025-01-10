import React from "react";
import PropTypes from "prop-types";
import ImageEditor from "@toast-ui/react-image-editor";
import "tui-image-editor/dist/tui-image-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";

const WrappedEditor = (props) => {
  const { forwardedRef } = props;

  return <ImageEditor {...props} ref={forwardedRef} />;
};

WrappedEditor.propTypes = {
  props: PropTypes.object,
  forwardedRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
};

export default WrappedEditor;