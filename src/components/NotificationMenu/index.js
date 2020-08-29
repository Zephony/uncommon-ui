import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import Notification from '../Notification';
import { groupBy } from '../../utils/helpers';

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
    max-height: ${props => props.maxHeight};
    overflow: auto;
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
        margin-bottom: 20px;
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

const GroupName = styled.div`
    color: #b3b3b3;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 19px;
    padding-bottom: 20px;
`;

/**
 * "Flops are a part of life's menu and I've never been a girl to miss out on any of the courses." - Rosalind Russell
 */
const NotificationMenu = ({
    data,
    onNotificationClick,
    onViewAllClick,
    timestampFormat,
    isTimeAgo,
    maxHeight = '550px',
    className = '',
}) => {
    const renderData = () => {
        // If grouped data
        if (data.length > 1 && 'group' in data[0]) {
            let groupedData = groupBy(data, 'group');
            return Object.keys(groupedData).map(group => (
                <div key={group}>
                    <GroupName>{group}</GroupName>
                    {groupedData[group].map(item => (
                        <NotificationWrapper
                            key={item.id}
                            onClick={() => onNotificationClick(item)}
                        >
                            <Notification
                                {...item}
                                timestampFormat={timestampFormat}
                                isTimeAgo={isTimeAgo}
                            />
                        </NotificationWrapper>
                    ))}
                </div>
            ));
        }

        return data.map(item => (
            <NotificationWrapper
                key={item.id}
                onClick={() => onNotificationClick(item)}
            >
                <Notification
                    {...item}
                    timestampFormat={timestampFormat}
                    isTimeAgo={isTimeAgo}
                />
            </NotificationWrapper>
        ));
    };

    return (
        <Wrapper className={`uu-notification-menu ${className}`}>
            <Header>
                <div style={{ display: 'flex' }}>
                    <StyledBellIcon />
                    <Title>Notifications</Title>
                </div>
                <Action onClick={onViewAllClick}>View all</Action>
            </Header>
            <Content maxHeight={maxHeight}>{renderData()}</Content>
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
            active: PropTypes.bool,
            group: PropTypes.string,
        })
    ).isRequired,
    /**
     * Accepts an event when a notification is clicked
     */
    onNotificationClick: PropTypes.func,
    /**
     * Accepts an event when view all is clicked
     */
    onViewAllClick: PropTypes.func,
    /**
     * Sets the max height of the notification menu content
     */
    maxHeight: PropTypes.string,
};

export default NotificationMenu;
