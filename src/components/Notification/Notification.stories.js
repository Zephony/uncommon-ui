import React from "react";
import Notification from "./";

export default {
  title: "Notification",

  parameters: {
    component: Notification
  }
};

export const defaultNotification = () => {
  return <Notification />;
};
