import React from "react";
import Notification from "./";
import styled from "styled-components";

const faker = require("faker");

export default {
  title: "Notification",

  parameters: {
    component: Notification
  }
};

const Wrapper = styled.div`
  width: 450px;
`;

export const defaultNotification = () => {
  const sample = {
    name: "Elon Musk",
    actionText: "has answered your question",
    time: "12:30pm"
  };

  return (
    <Wrapper>
      <Notification {...sample} />
    </Wrapper>
  );
};

export const unreadNotification = () => {
  const sample = {
    name: "Joe Rogan",
    actionText: "and 200 others want to know where you live",
    time: "3 hours ago",
    avatar: faker.image.avatar(),
    active: true
  };

  return (
    <Wrapper>
      <Notification {...sample} />
    </Wrapper>
  );
};
