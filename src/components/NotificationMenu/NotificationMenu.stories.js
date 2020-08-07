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

const data = [
  {
    id: 1,
    actor: "Elon Musk",
    actionText: "has answered your question",
    timestamp: "2020-08-07T11:00:00+05:30",
    active: true
  },
  {
    id: 2,
    actor: "Joe Rogan",
    actionText: "and 200 others want to know where you live",
    timestamp: "2020-08-07T08:00:00+05:30",
    avatar: faker.image.avatar(),
    active: true
  },
  {
    id: 3,
    actor: "Mark Cuban",
    actionText: "wants to connect with you",
    timestamp: "Thu, 06 Aug 2020 12:00:00 +0000",
    avatar: faker.image.avatar(),
    active: false
  },
  {
    id: 4,
    actor: "Belle Delphine",
    actionText: "wants to send you bathwater",
    timestamp: "Saturday, 06-Aug-20 08:05:30 UTC",
    avatar: faker.image.avatar(),
    active: false
  },
  {
    id: 5,
    actor: "Jordan Peterson",
    actionText: "is asking you to clean your room",
    timestamp: "2020-07-25T08:00:00+00:00",
    avatar: faker.image.avatar(),
    active: false
  }
];

export const defaultMenu = () => {
  /* Sample format
  * {
      id: 5,
      actor: "Jordan Peterson",
      actionText: "is asking you to clean your room",
      timestamp: "2020-07-25T08:00:00+00:00",
      avatar: faker.image.avatar(),
      active: false
    }
  */
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

export const formattedTimestamp = () => {
  return (
    <Wrapper>
      <NotificationMenu
        data={data}
        onNotificationClick={notification =>
          console.log("Details of notification", notification)
        }
        onViewAllClick={() => console.log("View all")}
        timestampFormat="HH:mm"
      />
    </Wrapper>
  );
};

export const timestampAgo = () => {
  return (
    <Wrapper>
      <NotificationMenu
        data={data}
        onNotificationClick={notification =>
          console.log("Details of notification", notification)
        }
        onViewAllClick={() => console.log("View all")}
        isTimeAgo
      />
    </Wrapper>
  );
};

export const setMaxHeight = () => {
  return (
    <Wrapper>
      <NotificationMenu
        data={data}
        onNotificationClick={notification =>
          console.log("Details of notification", notification)
        }
        onViewAllClick={() => console.log("View all")}
        isTimeAgo
        maxHeight="200px"
      />
    </Wrapper>
  );
};
