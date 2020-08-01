/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { useResize } from "../../utils/helpers";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

const ThumbnailWrapper = styled.div`
  position: relative;
  width: ${props => (props.maintainAspectRatio ? "100%" : props.width)};
  height: ${props => (props.maintainAspectRatio ? "400px" : props.height)};
`;

const Thumbnail = styled.div`
  width: ${props => (props.maintainAspectRatio ? "100%" : props.width)};
  height: ${props => (props.maintainAspectRatio ? "400px" : props.height)};
  border-radius: 4px;
  border: ${props =>
    props.hasFocus ? `2px solid ${props.theme.colors.primary}` : "none"};
  background-image: url('${props => props.src}');
  background-size: ${props =>
    props.maintainAspectRatio ? "contain" : "cover"};
  background-repeat: no-repeat;
  background-position: ${props =>
    props.maintainAspectRatio ? "left" : "center"};
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  ${props =>
    props.isAbsolute &&
    css`
      position: absolute;
    `}

`;

const OverlayWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

const Overlay = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 4px;
  position: absolute;
  background-color: rgba(52, 52, 52, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Count = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 24px;
`;

const CloseIcon = styled.i`
  font-size: 20px !important;
  position: absolute;
  top: 5px;
  right: 15px;
  color: #eaf1fd;
  cursor: pointer;
`;

const getTilesCount = (imageWidth, wrapperWidth, images) => {
  let count = 0;
  let totalImageWidth = imageWidth + 10;
  images.forEach(image => {
    if (totalImageWidth > wrapperWidth) {
      return count;
    } else {
      totalImageWidth = totalImageWidth + imageWidth + 10;
      count = count + 1;
    }
  });
  return count;
};

/**
 * "When words become unclear, I shall focus with photographs. When images become inadequate, I shall be content with silence." - Ansel Adams
 */
const ImageTile = ({
  images,
  width = "150px",
  height = "150px",
  count,
  onMoreClick,
  onImageClick,
  thumbnailStyle,
  hasFocus,
  autoCount,
  onClose
}) => {
  const componentRef = useRef();
  // Get width of the wrapper component
  const { width: wrapperWidth } = useResize(componentRef);
  const imageWidth = parseInt(width.match(/\d/g, "").join(""));
  const [currentFocus, setCurrentFocus] = useState(hasFocus);
  // If count not specified
  let tileCount = autoCount
    ? getTilesCount(imageWidth, wrapperWidth, images)
    : count || images.length + 1;

  useEffect(() => {
    setCurrentFocus(hasFocus);
  }, [hasFocus]);

  const onThumbnailClick = (image, i) => {
    // What the user passes
    onImageClick(image, i);
    setCurrentFocus(i);
  };

  let imageList =
    images.length > tileCount ? images.slice(0, tileCount - 1) : images;
  return (
    <Wrapper ref={componentRef}>
      {imageList.map((image, i) => {
        return (
          <ThumbnailWrapper>
            <Thumbnail
              key={i}
              onClick={() => onThumbnailClick(image, i)}
              src={image}
              width={width}
              height={height}
              style={{ ...thumbnailStyle }}
              hasFocus={typeof hasFocus === "number" && currentFocus === i}
              maintainAspectRatio={images.length === 1}
            />
            {onClose && (
              <CloseIcon onClick={onClose} className="material-icons">
                cancel
              </CloseIcon>
            )}
          </ThumbnailWrapper>
        );
      })}
      {/* For the last image with option to view more */}
      {images.length > tileCount && (
        <OverlayWrapper onClick={onMoreClick}>
          <Thumbnail
            src={images[tileCount - 1]}
            width={width}
            height={height}
            isAbsolute
            style={{ ...thumbnailStyle }}
          />
          <Overlay width={width} height={height} style={{ ...thumbnailStyle }}>
            <Count>+{images.length - tileCount}</Count>
          </Overlay>
        </OverlayWrapper>
      )}
    </Wrapper>
  );
};

ImageTile.propTypes = {
  /**
   * The width of each thumbnail
   */
  width: PropTypes.string,
  /**
   * The height of each thumbnail
   */
  height: PropTypes.string,
  /**
   * Array of image urls
   */
  images: PropTypes.array.isRequired,
  /**
   * Count of tiles to show
   */
  count: PropTypes.number,
  /**
   * Sets tiles based on the width of wrapper element
   */
  autoCount: PropTypes.bool,
  /**
   * Click event handler when one of the thumbnails is clicked
   */
  onImageClick: PropTypes.func,
  /**
   * Click event handler when more images is clicked
   */
  onMoreClick: PropTypes.func,
  /**
   * Click event handler for a close icon
   */
  onClose: PropTypes.func,
  /**
   * Override thumbnail styles
   */
  thumbnailStyle: PropTypes.object,
  /**
   * Accepts the index that it should start focus with
   */
  hasFocus: PropTypes.number
};

export default ImageTile;
