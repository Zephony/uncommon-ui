import React from "react";
import { action } from "@storybook/addon-actions";
import ImageTile from "./ImageTile";

export default {
  title: "Image Tile",

  parameters: {
    component: ImageTile
  }
};

const images = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80",
  "https://images.unsplash.com/photo-1595064642091-3b0e22d8de27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80",
  "https://images.unsplash.com/photo-1594992029224-c7948d15c175?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80",
  "https://images.unsplash.com/photo-1594936702539-125edeb46186?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2855&q=80",
  "https://images.unsplash.com/photo-1595054607409-0f03050ec7c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2772&q=80",
  "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2900&q=80",
  "https://images.unsplash.com/photo-1594997756045-a359e2b54c4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2801&q=80"
];

export const defaultTiles = () => {
  return (
    <ImageTile images={images} count={4} onMoreClick={action("Clicked")} />
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
