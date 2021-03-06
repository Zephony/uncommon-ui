/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { MdCancel } from 'react-icons/md';
import { ImageTile } from '@uncommonui/image-tile';
import { useKeyPress } from '@uncommonui/utils';
import Arrow from './arrow';

const propTypes = {
    /**
     * Initial image index to start with
     */
    initialIndex: PropTypes.number,
    /**
     * Array of image urls
     */
    images: PropTypes.array.isRequired,
    /**
     * Event when close button is clicked
     */
    onClose: PropTypes.func.isRequired,
};

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
  width: 75%;
  height: 60%;
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
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 5px;
`;

const CloseIcon = ({ onClick }) => {
    return (
        <CloseWrapper onClick={onClick}>
            <MdCancel fontSize="large" style={{ color: '#585858' }} />
        </CloseWrapper>
    );
};

/**
 * "History is a gallery of pictures in which there are few originals and many copies." - Alexis de Tocqueville
 */
export const Gallery = ({
    images,
    onClose,
    initialIndex = 0,
    className = '',
}) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const leftPress = useKeyPress('ArrowLeft');
    const rightPress = useKeyPress('ArrowRight');
    const escPress = useKeyPress('Escape');

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
        <Overlay className={`uu-gallery ${className}`}>
            <Image src={images[currentIndex]} className="uu-gallery-image" />
            <Arrow
                onClick={prevImage}
                direction="left"
                color="#fff"
                hideBorder
                fontSize={60}
                className="uu-gallery-arrow-left"
            />
            <Arrow
                onClick={nextImage}
                direction="right"
                color="#fff"
                hideBorder
                fontSize={60}
                className="uu-gallery-arrow-right"
            />
            <MdCancel onClick={onClose} className="uu-gallery-close" />
            <ImageTileWrapper className="uu-gallery-tiles">
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

Gallery.propTypes = propTypes;
