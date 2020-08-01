import React from "react";
import Avatar from "./";

const faker = require("faker");

export default {
  title: "Avatar",

  parameters: {
    component: Avatar
  }
};

export const defaultAvatar = () => {
  return <Avatar src={faker.image.avatar()} />;
};

export const customDimensions = () => {
  return <Avatar src={faker.image.avatar()} size="100px" />;
};

export const avatarActive = () => {
  return <Avatar src={faker.image.avatar()} isActive />;
};

export const avatarActiveColor = () => {
  return <Avatar src={faker.image.avatar()} isActive activeColor="#00ff00" />;
};
