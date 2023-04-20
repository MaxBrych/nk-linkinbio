// studio/ImagePreview.tsx
import React from "react";

interface ImagePreviewProps {
  value: string;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ value }) => {
  return (
    <img
      src={value}
      alt="Instagram Post Preview"
      style={{
        width: "100%",
        height: "auto",
        objectFit: "cover",
        maxHeight: "400px",
      }}
    />
  );
};

export default ImagePreview;
