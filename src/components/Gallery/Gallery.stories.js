import React, { useState } from "react";
import Gallery from "./Gallery";
import { ImageTile } from "components/ImageTile";
import { images } from "utils/helpers";

export default {
  title: "Gallery",

  parameters: {
    component: Gallery
  }
};

export const defaultGallery = () => <Gallery images={images} />;

export const GalleryWithTiles = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  const handleImageClick = (image, i) => {
    setInitialIndex(i);
    setShowGallery(true);
  };

  return (
    <div>
      <ImageTile
        images={images}
        count={4}
        onMoreClick={() => setShowGallery(true)}
        onImageClick={(image, i) => handleImageClick(image, i)}
      />
      {showGallery && (
        <Gallery
          images={images}
          initialIndex={initialIndex}
          onClose={() => setShowGallery(false)}
        />
      )}
    </div>
  );
};
