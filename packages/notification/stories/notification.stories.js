import React from 'react';
import styled from 'styled-components';
import { Notification } from '../src';

const faker = require('faker');

export default {
    title: 'Notification',

    parameters: {
        component: Notification,
    },
};

const Wrapper = styled.div`
    width: 450px;
`;

export const defaultNotification = () => {
    const sample = {
        actor: 'Elon Musk',
        actionText: 'has answered your question',
        time: '12:30pm',
        avatar: faker.image.avatar(),
    };

    return (
        <Wrapper>
            <Notification {...sample} />
        </Wrapper>
    );
};

export const unreadNotification = () => {
    const sample = {
        actor: 'Joe Rogan',
        actionText: 'and 200 others want to know where you live',
        time: '3 hours ago',
        avatar: faker.image.avatar(),
        active: true,
    };

    return (
        <Wrapper>
            <Notification {...sample} />
        </Wrapper>
    );
};
