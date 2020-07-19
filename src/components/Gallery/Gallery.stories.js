import React, { useState } from "react";
import Gallery from "./Gallery";
import { Button } from "../Button";
import { images } from "../../utils/helpers";

export default {
  title: "Gallery",

  parameters: {
    component: Gallery
  }
};

export const defaultGallery = () => <Gallery images={images} />;

export const OpenCloseGallery = () => {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setShowGallery(true)}>
        Click Me
      </Button>
      {showGallery && (
        <Gallery images={images} onClose={() => setShowGallery(false)} />
      )}
    </div>
  );
};
