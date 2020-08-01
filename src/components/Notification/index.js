import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Avatar from "../Avatar";

const Wrapper = styled.div`
  display: flex;
  min-width: 300px;
  width: 100%;
  align-items: center;
`;

const TextWrapper = styled.div`
  display: flex;
`;

const Text = styled.div`
  color: #585858;
  font-size: 15px;
  letter-spacing: 0;
  line-height: 18px;
  margin-left: 20px;
  margin-right: 20px;
  width: 75%;
`;

const Time = styled.div`
  color: #b3b3b3;
  font-size: 13px;
  letter-spacing: 0;
  line-height: 19px;
  width: 25%;
`;

const Notification = ({ name, actionText, time, avatar, active }) => {
  return (
    <Wrapper>
      <Avatar src={avatar} isActive={active} />
      <TextWrapper>
        <Text>
          <span style={{ fontWeight: "bold" }}>{name}</span> {actionText}
        </Text>
        <Time>{time}</Time>
      </TextWrapper>
    </Wrapper>
  );
};

Notification.propTypes = {
  /**
   * User performing the action
   */
  name: PropTypes.string.isRequired,
  /**
   * Action performed by the user
   */
  actionText: PropTypes.string.isRequired,
  /**
   * Notification timestamp
   */
  time: PropTypes.bool.isRequired,
  /**
   * Url for image avatar, ignore for empty avatar
   */
  avatar: PropTypes.string,
  /**
   * To indicate unread notifications
   */
  active: PropTypes.bool
};

export default Notification;
