import React from "react";


const Image = ({ src, alt = "image", className = "", ...props }) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`rounded-xl object-cover ${className}`}
      {...props}
    />
  );
};

export default Image;
