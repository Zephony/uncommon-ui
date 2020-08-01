import React from "react";
import NotificationMenu from "./";
import styled from "styled-components";

const faker = require("faker");

export default {
  title: "Notification Menu",

  parameters: {
    component: NotificationMenu
  }
};

const Wrapper = styled.div`
  width: 500px;
`;

export const defaultMenu = () => {
  const data = [
    {
      id: 1,
      actor: "Elon Musk",
      actionText: "has answered your question",
      time: "12:30pm",
      active: true
    },
    {
      id: 2,
      actor: "Joe Rogan",
      actionText: "and 200 others want to know where you live",
      time: "3 hours ago",
      avatar: faker.image.avatar(),
      active: true
    },
    {
      id: 3,
      actor: "Mark Cuban",
      actionText: "wants to connect with you",
      time: "5 hours ago",
      avatar: faker.image.avatar(),
      active: false
    },
    {
      id: 4,
      actor: "Belle Delphine",
      actionText: "wants to send you bathwater",
      time: "1 week ago",
      avatar: faker.image.avatar(),
      active: false
    }
  ];

  return (
    <Wrapper>
      <NotificationMenu
        data={data}
        onNotificationClick={notification =>
          console.log("Details of notification", notification)
        }
        onViewAllClick={() => console.log("View all")}
      />
    </Wrapper>
  );
};
