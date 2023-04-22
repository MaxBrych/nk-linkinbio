// ImagePreview.tsx
import React from "react";
import { convertWebpToJpeg } from "../../utils/convertWebpToJpeg";

interface ImagePreviewProps {
  value: string;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ value }) => {
  const imageUrl = convertWebpToJpeg(value);
  return (
    <img
      src={imageUrl}
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
