import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../src';

export default {
    title: 'Forms/Textarea',

    parameters: {
        component: Input,
    },
};

const Wrapper = styled.div`
    width: 400px;
`;

export const TextareaDefault = () => {
    const [value, setValue] = useState('');
    return (
        <Wrapper>
            <Input
                type="textarea"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </Wrapper>
    );
};

export const TextareaWithLabel = () => {
    return (
        <Wrapper>
            <Input type="textarea" label="This is a label" />
        </Wrapper>
    );
};

export const TextareaRequired = () => {
    return (
        <Wrapper>
            <Input type="textarea" label="This is required" required />
        </Wrapper>
    );
};

export const TextareaDisabled = () => {
    return (
        <Wrapper>
            <Input type="textarea" label="This is disabled" disabled />
        </Wrapper>
    );
};

export const TextareaVariableWidth = () => {
    return (
        <Input
            type="textarea"
            width="280px"
            placeholder="Enter message here..."
        />
    );
};

export const TextareaWithError = () => {
    return (
        <Input
            type="textarea"
            width="380px"
            placeholder="Enter message here..."
            error="This is an error"
        />
    );
};

export const TextareaWithCTA = () => {
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
            type="textarea"
            width="380px"
            placeholder="Enter message here..."
            cta={<CTA onClick={() => "Ma I've been clicked"}>Verify</CTA>}
        />
    );
};

export const OverrideTheme = () => {
    return (
        <Wrapper>
            <Input type="textarea" theme={{ colors: { primary: 'green' } }} />
        </Wrapper>
    );
};

export const AutoResize = () => {
    const [value, setValue] = useState('');
    return (
        <Input
            type="textarea"
            value={value}
            onChange={e => setValue(e.target.value)}
            width="280px"
            placeholder="Enter message here..."
            autoResize
            maxHeight="400px"
        />
    );
};
