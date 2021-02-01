import React, { useState} from "react";
import Image from "gatsby-image";
import ZoomImage from "./ZoomImage";


const GalleryImage = ({ fluid }) => {
  const [open, setOpen] = useState(false);

  const openImage = () => {
    setOpen(true);
  };
  const closeImage = () => {
    setOpen(false);
  };

  const openImageKey = (e) => {
    if (e.keyCode === 13) {
      openImage();
    }
    if (e.keyCode === 27) {
      closeImage();
    }
  };


  return (
    <>
      <div
        onClick={openImage}
        className="gallery-image"
        onKeyDown={openImageKey}
      >
        <Image  fluid={fluid}/>
      </div>
      {open && <ZoomImage closeImage={closeImage} fluid={fluid} />}
    </>
  );
};

export default GalleryImage;
