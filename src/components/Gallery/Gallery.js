/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Arrow from "../Slider/Arrow";
import { ImageTile } from "../ImageTile";
import { useKeyPress } from "../../utils/helpers";

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Image = styled.div`
  position: absolute;
  top: 100px;
  width: 1000px;
  height: 500px;
  background-image: url('${props => props.src}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const ImageTileWrapper = styled.div`
  position: absolute;
  bottom: 40px;
`;

const CloseWrapper = styled.div`
  position: absolute;
  top: 40px;
  right: 40px;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 5px;
`;

const Close = styled.i`
  font-size: 25px !important;
  color: #fafafa;
`;

const CloseIcon = ({ onClick }) => {
  return (
    <CloseWrapper onClick={onClick}>
      <Close className="material-icons">close</Close>
    </CloseWrapper>
  );
};

const Gallery = ({ images, onClose, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const leftPress = useKeyPress("ArrowLeft");
  const rightPress = useKeyPress("ArrowRight");
  const escPress = useKeyPress("Escape");

  useEffect(() => {
    if (leftPress) {
      prevImage();
    } else if (rightPress) {
      nextImage();
    } else if (escPress) {
      onClose();
    }
  }, [leftPress, rightPress, escPress]);

  const nextImage = () => {
    // If at the last image
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImage = () => {
    // If at the first image
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const onThumbnailClick = i => {
    setCurrentIndex(i);
  };

  return (
    <Overlay>
      <Image src={images[currentIndex]} />
      <Arrow
        onClick={prevImage}
        direction="left"
        color="#fff"
        fontSize="65px"
        hideBorder
      />
      <Arrow
        onClick={nextImage}
        direction="right"
        color="#fff"
        fontSize="65px"
        hideBorder
      />
      <CloseIcon onClick={onClose} />
      <ImageTileWrapper>
        <ImageTile
          images={images}
          width="62px"
          height="62px"
          onImageClick={(image, i) => onThumbnailClick(i)}
          hasFocus={currentIndex}
        />
      </ImageTileWrapper>
    </Overlay>
  );
};

Gallery.propTypes = {
  /**
   * Array of image urls
   */
  images: PropTypes.array.isRequired,
  /**
   * Event when close button is clicked
   */
  onClose: PropTypes.func.isRequired
};

export default Gallery;
