import React, { useState } from 'react';
import styled from 'styled-components';
import { Select } from '../src';

const Wrapper = styled.div`
    width: 400px;
    padding: 20px;
`;

export default {
    title: 'Forms/Select',

    parameters: {
        component: Select,
    },
};

const options = [
    { value: 1, label: 'Chocolate' },
    { value: 2, label: 'Strawberry' },
    { value: 3, label: 'Vanilla' },
];

export const BasicSelect = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    return (
        <Wrapper>
            <Select
                value={selectedOption}
                onChange={option => setSelectedOption(option)}
                options={options}
                label="Ice Cream"
            />
        </Wrapper>
    );
};

export const ErrorState = () => {
    return (
        <Wrapper>
            <Select
                options={options}
                label="Ice Cream"
                error="This is an error"
            />
        </Wrapper>
    );
};

export const SelectWithoutObject = () => {
    const [selectedOption, setSelectedOption] = useState(1);
    return (
        <Wrapper>
            <Select
                value={selectedOption}
                onChange={option => setSelectedOption(option)}
                options={options}
                label="Ice Cream"
            />
        </Wrapper>
    );
};

export const MultiSelect = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    return (
        <Wrapper>
            <Select
                value={selectedOption}
                onChange={option => setSelectedOption(option)}
                options={options}
                label="Ice Cream"
                isMulti
            />
        </Wrapper>
    );
};

export const MultiSelectWithoutObject = () => {
    const [selectedOption, setSelectedOption] = useState([1, 2]);
    return (
        <Wrapper>
            <Select
                value={selectedOption}
                onChange={option => setSelectedOption(option)}
                options={options}
                label="Ice Cream"
                isMulti
            />
        </Wrapper>
    );
};
