import React, { useState } from 'react';
import styled from 'styled-components';
import { Input } from '../src';

export default {
    title: 'Forms/Input',

    parameters: {
        component: Input,
    },
};

const Wrapper = styled.div`
    width: 400px;
`;

export const InputDefault = () => {
    const [value, setValue] = useState('');

    return (
        <Wrapper>
            <Input
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </Wrapper>
    );
};

export const InputWithLabel = () => {
    return (
        <Wrapper>
            <Input type="text" label="This is a label" />
        </Wrapper>
    );
};

export const InputRequired = () => {
    return (
        <Wrapper>
            <Input type="text" label="This is required" required />
        </Wrapper>
    );
};

export const InputDisabled = () => {
    return (
        <Wrapper>
            <Input type="text" label="This is disabled" disabled />
        </Wrapper>
    );
};

export const InputVariableWidth = () => {
    return (
        <Input type="text" width="280px" placeholder="Enter message here..." />
    );
};

export const InputWithError = () => {
    return (
        <Input
            type="text"
            width="380px"
            placeholder="Enter message here..."
            error="This is an error"
        />
    );
};

export const InputWithIcon = () => {
    return (
        <Input
            type="text"
            width="380px"
            placeholder="Enter message here..."
            icon="search"
        />
    );
};

export const InputWithCTA = () => {
    const CTA = styled.div`
        color: #3577ec;
        letter-spacing: 0;
        line-height: 22px;

        &:hover {
            color: rgba(53, 119, 236, 0.8);
        }
    `;
    return (
        <Input
            type="text"
            width="380px"
            placeholder="Enter message here..."
            cta={<CTA onClick={() => "Ma I've been clicked"}>Verify</CTA>}
        />
    );
};

export const OverrideTheme = () => {
    return (
        <Wrapper>
            <Input type="text" theme={{ colors: { primary: 'green' } }} />
        </Wrapper>
    );
};

export const OverrideInputStyles = () => {
    return (
        <Wrapper>
            <Input
                type="text"
                icon="search"
                className="tag-input" // To override input styles
                iconClassName="tag-input-icon" // To override icon styles
                placeholder="Search Tags"
            />
        </Wrapper>
    );
};
