// imageUrlPreview.js
import React from "react";

const cloudName = "dkcl1igvd"; // Replace this with your Cloudinary cloud name

const ImageUrlPreview = ({ value }: any) => {
  const cloudinaryUrl =
    value &&
    `https://res.cloudinary.com/${cloudName}/image/fetch/c_thumb,w_100,h_100,f_auto,q_auto/${encodeURIComponent(
      value
    )}`;

  return (
    <div>
      {cloudinaryUrl && (
        <img
          src={cloudinaryUrl}
          alt="Preview"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            borderRadius: 2,
          }}
        />
      )}
    </div>
  );
};

export default ImageUrlPreview;
