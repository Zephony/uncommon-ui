import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import Notification from "../Notification";

const Wrapper = styled.div`
  width: 100%;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.05);
`;

const Header = styled.div`
  width: auto;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e8e8e8;
`;

const Content = styled.div`
  width: auto;
  padding: 20px;
`;

const Title = styled.div`
  color: #585858;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 24px;
  margin-left: 20px;
`;

const Action = styled.div`
  color: rgb(53, 119, 236);
  font-size: 14px;
  letter-spacing: 0;
  line-height: 21px;
  text-align: right;
  cursor: pointer;

  &:hover {
    color: rgb(53, 119, 236, 0.8);
  }
`;

const NotificationWrapper = styled.div`
  border-bottom: 1px solid #e8e8e8;
  padding: 10px 0;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }
`;

const BellIconWrapper = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: rgb(226, 134, 61, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BellIcon = styled(NotificationsNoneOutlinedIcon)`
  color: #e2863d;
`;

const StyledBellIcon = () => {
  return (
    <BellIconWrapper>
      <BellIcon />
    </BellIconWrapper>
  );
};

const NotificationMenu = ({
  data,
  onNotificationClick,
  onViewAllClick,
  timestampFormat,
  isTimeAgo
}) => {
  return (
    <Wrapper>
      <Header>
        <div style={{ display: "flex" }}>
          <StyledBellIcon />
          <Title>Notifications</Title>
        </div>
        <Action onClick={onViewAllClick}>View all</Action>
      </Header>
      <Content>
        {data.map(item => (
          <NotificationWrapper onClick={() => onNotificationClick(item)}>
            <Notification
              {...item}
              timestampFormat={timestampFormat}
              isTimeAgo={isTimeAgo}
            />
          </NotificationWrapper>
        ))}
      </Content>
    </Wrapper>
  );
};

NotificationMenu.propTypes = {
  /**
   * Notifications to be displayed
   */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      actor: PropTypes.string,
      actionText: PropTypes.string,
      time: PropTypes.string,
      avatar: PropTypes.string,
      active: PropTypes.bool
    })
  ).isRequired,
  /**
   * Accepts an event when a notification is clicked
   */
  onNotificationClick: PropTypes.func,
  /**
   * Accepts an event when view all is clicked
   */
  onViewAllClick: PropTypes.func
};

export default NotificationMenu;
