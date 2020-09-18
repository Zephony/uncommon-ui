import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Avatar } from '@uncommonui/avatar';

const propTypes = {
    /**
     * User performing the action
     */
    actor: PropTypes.string.isRequired,
    /**
     * Notification description of the action performed by the user
     */
    actionText: PropTypes.string.isRequired,
    /**
     * Notification timestamp
     */
    timestamp: PropTypes.bool.isRequired,
    /**
     * Url for image avatar, ignore for empty avatar
     */
    avatar: PropTypes.string,
    /**
     * To indicate unread notifications
     */
    active: PropTypes.bool,
    /**
     * Moment format for time to display
     */
    timestampFormat: PropTypes.string,
    /**
     * Displays time in ago format
     */
    isTimeAgo: PropTypes.bool,
};

const Wrapper = styled.div`
    display: flex;
    min-width: 300px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`;

const TextWrapper = styled.div`
    display: flex;
`;

const Text = styled.div`
    color: #585858;
    font-size: 0.9375em;
    letter-spacing: 0;
    line-height: 18px;
    margin-left: 20px;
    margin-right: 20px;
    width: 75%;
`;

const Time = styled.div`
    color: #b3b3b3;
    font-size: 0.8125em;
    letter-spacing: 0;
    line-height: 19px;
    width: 25%;
    text-align: right;
`;

/**
 * "Mobile notifications put people in a state of perpetual emergency interruption - similar to what 911 operators and air traffic controllers experienced back in the '70s and '80s." - Douglas Rushkoff
 */
export const Notification = ({
    actor,
    actionText,
    timestamp,
    avatar,
    active,
    timestampFormat = 'hh:mma',
    isTimeAgo,
    className = '',
}) => {
    return (
        <Wrapper className={`uu-notification ${className}`}>
            <TextWrapper className="uu-notification-text-wrapper">
                <Avatar
                    src={avatar}
                    isActive={active}
                    className="uu-notification-avatar"
                />
                <Text className="uu-notification-text">
                    <span style={{ fontWeight: 'bold' }}>{actor}</span>{' '}
                    {actionText}
                </Text>
            </TextWrapper>
            <Time className="uu-notification-timestamp">
                {isTimeAgo
                    ? moment(timestamp).fromNow()
                    : moment(timestamp).format(timestampFormat)}
            </Time>
        </Wrapper>
    );
};

Notification.propTypes = propTypes;
