import React, { useState } from "react";
import Gallery from "./Gallery";
import { Button } from "../Button";
import { ImageTile } from "../ImageTile";
import { images } from "../../utils/helpers";

export default {
  title: "Gallery",

  parameters: {
    component: Gallery
  }
};

export const defaultGallery = () => <Gallery images={images} />;

export const GalleryWithTiles = () => {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <div>
      <ImageTile
        images={images}
        count={4}
        onMoreClick={() => setShowGallery(true)}
      />
      {showGallery && (
        <Gallery images={images} onClose={() => setShowGallery(false)} />
      )}
    </div>
  );
};
