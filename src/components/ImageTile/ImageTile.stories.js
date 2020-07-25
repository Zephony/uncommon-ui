import React from "react";
import styled from "styled-components";
import { action } from "@storybook/addon-actions";
import ImageTile from "./";
import { images } from "../../utils/helpers";

export default {
  title: "Image Tile",

  parameters: {
    component: ImageTile
  }
};

const Wrapper = styled.div`
  width: 800px;
`;

export const defaultTiles = () => {
  return (
    <ImageTile
      images={images}
      count={4}
      onMoreClick={action("Clicked")}
      onImageClick={action("Clicked")}
    />
  );
};

export const tilesWithClose = () => {
  return (
    <ImageTile
      images={images}
      count={4}
      onMoreClick={action("Clicked")}
      onClose={action("Clicked")}
    />
  );
};

export const customDimensions = () => {
  return (
    <ImageTile
      images={images}
      width="300px"
      height="400px"
      count={3}
      onMoreClick={action("Clicked")}
    />
  );
};

export const withoutCount = () => {
  return (
    <ImageTile
      images={images}
      width="200px"
      height="200px"
      onMoreClick={action("Clicked")}
    />
  );
};

export const overrideThumbnailStyles = () => {
  return (
    <ImageTile
      images={images}
      count={4}
      onMoreClick={action("Clicked")}
      onImageClick={action("Clicked")}
      thumbnailStyle={{
        borderRadius: "15px"
      }}
    />
  );
};

export const autoCountWithWrapper = () => {
  return (
    <Wrapper>
      <ImageTile
        images={images.slice(0, 2)}
        width="200px"
        height="200px"
        onMoreClick={action("Clicked")}
        autoCount
      />
    </Wrapper>
  );
};
