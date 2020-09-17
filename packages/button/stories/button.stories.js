import React from 'react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import Button from '../src';

const Wrapper = styled.div`
    display: flex;
    width: 500px;
    justify-content: space-between;
`;

export default {
    title: 'Button',

    parameters: {
        component: Button,
    },
};

export const Buttons = () => (
    <Wrapper>
        <Button onClick={action('Clicked')} type="primary">
            Primary
        </Button>
        <Button onClick={action('Clicked')} type="secondary">
            Secondary
        </Button>
        <Button onClick={action('Clicked')} type="link">
            Link
        </Button>
    </Wrapper>
);

export const DisabledButtons = () => (
    <Wrapper>
        <Button onClick={action('Clicked')} type="primary" disabled>
            Primary
        </Button>
        <Button onClick={action('Clicked')} type="secondary" disabled>
            Secondary
        </Button>
    </Wrapper>
);
