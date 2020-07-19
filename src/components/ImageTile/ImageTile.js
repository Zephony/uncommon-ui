import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

const Thumbnail = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 4px;
  background-image: url('${props => props.src}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
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

/**
 * "When words become unclear, I shall focus with photographs. When images become inadequate, I shall be content with silence." - Ansel Adams
 */
const ImageTile = ({
  images,
  width,
  height,
  count,
  onMoreClick,
  onImageClick,
  thumbnailStyle
}) => {
  // If count not specified
  let imageCount = count || images.length + 1;
  return (
    <Wrapper>
      {images.map((image, i) => {
        if (i < imageCount - 1) {
          return (
            <Thumbnail
              key={i}
              onClick={() => onImageClick(image, i)}
              src={image}
              width={width}
              height={height}
              style={{ ...thumbnailStyle }}
            />
          );
        }
        return null;
      })}
      {/* For the last image with option to view more */}
      {count && (
        <OverlayWrapper onClick={onMoreClick}>
          <Thumbnail
            src={images[imageCount]}
            width={width}
            height={height}
            isAbsolute
            style={{ ...thumbnailStyle }}
          />
          <Overlay width={width} height={height} style={{ ...thumbnailStyle }}>
            <Count>+{images.length - imageCount}</Count>
          </Overlay>
        </OverlayWrapper>
      )}
    </Wrapper>
  );
};

ImageTile.defaultProps = {
  width: "150px",
  height: "150px"
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
   * Count to images to show
   */
  count: PropTypes.number,
  /**
   * Click event handler when one of the thumbnails is clicked
   */
  onImageClick: PropTypes.func,
  /**
   * Click event handler when more images is clicked
   */
  onMoreClick: PropTypes.func,
  /**
   * Override thumbnail styles
   */
  thumbnailStyle: PropTypes.object
};

export default ImageTile;
